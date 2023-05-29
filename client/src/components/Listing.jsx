import React from 'react'

import state from '../store';

const Listing = ({ url, category, name, description, seller, price, tele }) => {
  return (
    <div className='sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer' 
        onClick={() => {
            state.marketplace = false;
            state.intro = false;
            state.fullDecal = url;
            state.mainImage = false;
            state.telegramHandle = tele;
            state.rotationZ = 0;
            state.positionX = 0;
            state.positionY = 0;
    }}>
        <img src={url} 
        className='h-[288px] w-full object-cover rounded-[15px]' />

        <div className='flex flex-col p-4'>
            <div className='flex flex-row items-center mb-[18px]'>
             <p className='mt-[2px] font-medium text-[12px] text-[#808191]'>Category: {category}</p> 
            </div>

            <div className='block'>
                <h3 className='font-semibold text-white text-[16px] text-left leading-[26px] truncate'>{name}</h3>
                <p className='mt-[5px] font-normal text-[#808191] text-left leading-[18px] truncate'>{description}.</p>
            </div>

            <div className='flex flex-wrap justify-between gap-2 my-[15px]'>
                <div className='flex flex-col'>
                    <h4 className='font-semibold text-[16px] text-[#b2b3bd] leading-[22px]'>Price: {price}</h4>
                    <p className='flex-1 text-[#808191]'>by <span className='text-[#b2b3bd]'>{seller}</span></p>
                </div>
                <div className='flex flex-col'>
                    <h4 className='font-semibold text-[14px] text-[#b2b3bd] leading-[22px]'>View</h4>
                    <p className='mt-[3px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate'>Now</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Listing