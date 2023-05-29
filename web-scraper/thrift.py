import configparser
import json
import asyncio
import os
from datetime import date, datetime
from dotenv import load_dotenv

from telethon import TelegramClient
from telethon.errors import SessionPasswordNeededError
from telethon.tl.functions.messages import (GetHistoryRequest)
from telethon.tl.types import (
    PeerChannel
)

import emoji

load_dotenv()

class DateTimeEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, datetime):
            return o.isoformat()

        if isinstance(o, bytes):
            return list(o)

        return json.JSONEncoder.default(self, o)

config = configparser.ConfigParser()
config.read("config.ini")

api_id = os.getenv('API_ID')
api_hash = os.getenv('API_HASH')

phone_num = os.getenv('PHONE_NUM')
username = os.getenv('USERNAME')

client = TelegramClient(username, api_id, api_hash)

def text_has_no_emoji(text):
    return all([i not in emoji.EMOJI_DATA for i in text])

async def main(phone):
    await client.start()
    print("Created Client Successfully")

    if await client.is_user_authorized() == False:
        await client.send_code_request(phone_num)
        try:
            await client.sign_in(phone_num, input('Enter the code sent to your tele: '))
        except SessionPasswordNeededError:
            await client.sign_in(password=input('Password: '))

    me = await client.get_me()

    user_input_channel = input('enter entity(telegram URL or entity id):')

    if user_input_channel.isdigit():
        entity = PeerChannel(int(user_input_channel))
    else:
        entity = user_input_channel

    my_channel = await client.get_entity(entity)

    offset_id = 0
    limit = 100
    all_messages = []
    total_messages = 0
    total_count_limit = 0

    while True:
        print("Current Offset ID is:", offset_id, "; Total Messages:", total_messages)
        history = await client(GetHistoryRequest(
            peer=my_channel,
            offset_id=offset_id,
            offset_date=None,
            add_offset=0,
            limit=limit,
            max_id=0,
            min_id=0,
            hash=0
        ))
        if not history.messages:
            break
        messages = history.messages
        for object in messages:
            message = object.to_dict()
            if (message.get("message") is not None and 
                message.get("message") != "" and 
                len(message.get("message")) < 200 and 
                text_has_no_emoji(message.get("message")) and
                '\n' in message.get("message")
            ):
                # if object.media is not None:
                #     photo = await object.download_media(object.media, "./throw.jpg")
                # try:
                #     message['photo'] = photo
                #     with open("./throw.jpg", "rb") as image:
                #         f = image.read()
                #         message['photo'] = bytearray(f) 
                # except:
                #     message['photo'] = []
                all_messages.append(message)
        offset_id = messages[len(messages) - 1].id
        total_messages = len(all_messages)
        if total_count_limit != 0 and total_messages >= total_count_limit:
            break

    with open('channel_messages.json', 'w') as outfile:
        json.dump(all_messages, outfile, cls=DateTimeEncoder)

with client:
    client.loop.run_until_complete(main(phone_num))