import json

import emoji

import re 

from PIL import Image
import numpy as np

def text_has_no_emoji(text):
    return all([i not in emoji.EMOJI_DATA for i in text])

data = ""
with open("./channel_messages.json") as f:
    res = json.load(f)
    for object in res:
        if (object.get("message") is not None and 
            object.get("message") != "" and 
            len(object.get("message")) < 200 and 
            text_has_no_emoji(object.get("message")) and
            '\n' in object.get("message")
        ):
            if res.index(object) + 1 != len(res):
                data += object.get("message") + "\n\n" 
            else: 
                data += object.get("message")
    
            # print(object.get("message"))
            # print()


items = data.strip().split("\n\n")
cleaned_data = []

for item in items:
    lines = item.strip().split("\n")
    id = items.index(item) + 1
    image = "shirt" + str(id)
    name = lines[0].title()
    description = lines[1].split(" ")[-1]
    for line in lines:
        find_price = re.search(r'\$(\d+(\.\d{1,2})?)', line)
        if find_price:
            price = find_price.group(1)
            break

    cleaned_data.append({
        "id": id,
        "name": name,
        "description": description,
        "seller": "Ahma Thrifts",
        "price": price,
        "url": image,
        "tele": "shermaineboey"
    })

print("img/shirt1.jpg")

[{'id': 1, 'name': 'Florida Panthers Hockey Tee', 'description': 'XL', 'seller': 'Ahma Thrifts', 'price': '12', 'url': 'shirt1', 'tele': 'shermaineboey'}, 
 {'id': 2, 'name': 'University Of Oklahoma Tee', 'description': 'L', 'seller': 'Ahma Thrifts', 'price': '20', 'url': 'shirt2', 'tele': 'shermaineboey'}, 
 {'id': 3, 'name': 'Red Polo Rl Longsleeve', 'description': 'M', 'seller': 'Ahma Thrifts', 'price': '25', 'url': 'shirt3', 'tele': 'shermaineboey'}, 
 {'id': 4, 'name': 'Orange Polo Rl Cable Knit Sweater', 'description': 'M', 'seller': 'Ahma Thrifts', 'price': '38', 'url': 'shirt4', 'tele': 'shermaineboey'}, 
 {'id': 5, 'name': 'Yellow Polo Rl Knit Sweater', 'description': 'L', 'seller': 'Ahma Thrifts', 'price': '38', 'url': 'shirt5', 'tele': 'shermaineboey'}, 
 {'id': 6, 'name': 'Navy Polo Rl Cable Knit Sweater', 'description': 'L', 'seller': 'Ahma Thrifts', 'price': '38', 'url': 'shirt6', 'tele': 'shermaineboey'}, 
 {'id': 7, 'name': 'Pink Polo Rl Cable Knit Sweater', 'description': 'XL', 'seller': 'Ahma Thrifts', 'price': '34', 'url': 'shirt7', 'tele': 'shermaineboey'}, 
 {'id': 8, 'name': 'Miami Heat Basketball Tee ', 'description': 'XL', 'seller': 'Ahma Thrifts', 'price': '10', 'url': 'shirt8', 'tele': 'shermaineboey'}, 
 {'id': 9, 'name': 'Cherokee Embroidery Tee', 'description': 'XL', 'seller': 'Ahma Thrifts', 'price': '10', 'url': 'shirt9', 'tele': 'shermaineboey'}, 
 {'id': 10, 'name': 'Las Vegas Embroidery Tee ', 'description': 'L', 'seller': 'Ahma Thrifts', 'price': '10', 'url': 'shirt10', 'tele': 'shermaineboey'}, 
 {'id': 11, 'name': 'Bear Tee', 'description': 'XL', 'seller': 'Ahma Thrifts', 'price': '10', 'url': 'shirt11', 'tele': 'shermaineboey'}, 
 {'id': 12, 'name': 'Cat Tee', 'description': 'L', 'seller': 'Ahma Thrifts', 'price': '10', 'url': 'shirt12', 'tele': 'shermaineboey'}, 
 {'id': 13, 'name': 'Vintage Bear Tee', 'description': 'XL', 'seller': 'Ahma Thrifts', 'price': '10', 'url': 'shirt13', 'tele': 'shermaineboey'}, 
 {'id': 14, 'name': 'Kittens Tee', 'description': 'M', 'seller': 'Ahma Thrifts', 'price': '15', 'url': 'shirt14', 'tele': 'shermaineboey'}, 
 {'id': 15, 'name': 'Harley Tee', 'description': 'M', 'seller': 'Ahma Thrifts', 'price': '15', 'url': 'shirt15', 'tele': 'shermaineboey'}, 
 {'id': 16, 'name': 'Harley Tee', 'description': 'M', 'seller': 'Ahma Thrifts', 'price': '15', 'url': 'shirt16', 'tele': 'shermaineboey'}, 
 {'id': 17, 'name': 'Harley Tee', 'description': 'XXL', 'seller': 'Ahma Thrifts', 'price': '15', 'url': 'shirt17', 'tele': 'shermaineboey'}, 
 {'id': 18, 'name': 'Harley Tee', 'description': 'M', 'seller': 'Ahma Thrifts', 'price': '15', 'url': 'shirt18', 'tele': 'shermaineboey'}, 
 {'id': 19, 'name': 'Canada Harley Tee', 'description': 'XXL', 'seller': 'Ahma Thrifts', 'price': '15', 'url': 'shirt19', 'tele': 'shermaineboey'}, 
 {'id': 20, 'name': 'The Mountain Dog Tee', 'description': 'L', 'seller': 'Ahma Thrifts', 'price': '10', 'url': 'shirt20', 'tele': 'shermaineboey'}, 
 {'id': 21, 'name': 'Single Stitched Xmas Tee', 'description': 'S', 'seller': 'Ahma Thrifts', 'price': '10', 'url': 'shirt21', 'tele': 'shermaineboey'}, 
 {'id': 22, 'name': 'Vintage St Thomas Tee', 'description': 'XL', 'seller': 'Ahma Thrifts', 'price': '10', 'url': 'shirt22', 'tele': 'shermaineboey'}, 
 {'id': 23, 'name': 'Harley Tee', 'description': 'L', 'seller': 'Ahma Thrifts', 'price': '10', 'url': 'shirt23', 'tele': 'shermaineboey'}, 
 {'id': 24, 'name': 'Ksa Kickoff Football Tee', 'description': 'XL', 'seller': 'Ahma Thrifts', 'price': '10', 'url': 'shirt24', 'tele': 'shermaineboey'}, 
 {'id': 25, 'name': 'Canada Embroidery Tee', 'description': 'L', 'seller': 'Ahma Thrifts', 'price': '10', 'url': 'shirt25', 'tele': 'shermaineboey'}, 
 {'id': 26, 'name': 'Harley Tee', 'description': 'M', 'seller': 'Ahma Thrifts', 'price': '5', 'url': 'shirt26', 'tele': 'shermaineboey'}, 
 {'id': 27, 'name': 'Harley Tee', 'description': 'M', 'seller': 'Ahma Thrifts', 'price': '5', 'url': 'shirt27', 'tele': 'shermaineboey'}, 
 {'id': 28, 'name': 'Ou Russell Tee', 'description': 'L', 'seller': 'Ahma Thrifts', 'price': '5', 'url': 'shirt28', 'tele': 'shermaineboey'}, 
 {'id': 29, 'name': 'Nike Tee', 'description': 'XXL', 'seller': 'Ahma Thrifts', 'price': '5', 'url': 'shirt29', 'tele': 'shermaineboey'}, 
 {'id': 30, 'name': 'Sports Tee', 'description': 'XXL', 'seller': 'Ahma Thrifts', 'price': '5', 'url': 'shirt30', 'tele': 'shermaineboey'}, 
 {'id': 31, 'name': 'Nfl', 'description': 'L', 'seller': 'Ahma Thrifts', 'price': '5', 'url': 'shirt31', 'tele': 'shermaineboey'}, 
 {'id': 32, 'name': 'Dog Tee', 'description': 'S', 'seller': 'Ahma Thrifts', 'price': '5', 'url': 'shirt32', 'tele': 'shermaineboey'}, 
 {'id': 33, 'name': 'Champion Ape Tee', 'description': 'S', 'seller': 'Ahma Thrifts', 'price': '5', 'url': 'shirt33', 'tele': 'shermaineboey'}, 
 {'id': 34, 'name': 'Champion Lenoir Bears University ', 'description': 'S', 'seller': 'Ahma Thrifts', 'price': '5', 'url': 'shirt34', 'tele': 'shermaineboey'}, 
 {'id': 35, 'name': 'Puma Tee', 'description': 'M', 'seller': 'Ahma Thrifts', 'price': '5', 'url': 'shirt35', 'tele': 'shermaineboey'}, 
 {'id': 36, 'name': 'Nike Usa Tee', 'description': 'S', 'seller': 'Ahma Thrifts', 'price': '5', 'url': 'shirt36', 'tele': 'shermaineboey'}, 
 {'id': 37, 'name': 'Carolina Panthers Football Tee', 'description': 'S', 'seller': 'Ahma Thrifts', 'price': '5', 'url': 'shirt37', 'tele': 'shermaineboey'}]

