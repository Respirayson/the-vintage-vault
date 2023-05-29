import React, { useState } from 'react'

import { useSnapshot } from 'valtio'
import state from '../store'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeAnimation } from '../config/motion'
import { CustomButton, FormField } from '../components'

const CreateListing = () => {

    const snap = useSnapshot(state);

    const [form, setForm] = useState({
        name: '',
        description: '',
        seller: '',
        price: '',
        url: '',
        telegramHandle: '',
        category: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        state.listings = [...state.listings, form];
        state.createListing = false;
    }

    return (
        <AnimatePresence>
            {snap.createListing && (<>
                <motion.div
                    key="custom"
                    className="absolute top-8 left-96 right-96 sm:left-48 sm:right-48 z-20"
                    {...fadeAnimation}
                >
            
            <div className='bg-[#1c1c24] rounded-[10px] sm:p-10'>
                <div className='flex flex-row justify-center items-center p-[16px] bg-[#3a3a43] rounded-[10px]'>
                    <h1 className='font-bold sm:text=[25px] text-[18px] leading-[38px] text-white'>Start a Listing</h1>
                </div>
            
            <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
                <div className='flex flex-wrap gap-[40px]'>
                    <FormField
                        labelName='Name'
                        placeholder='Enter name of item'
                        inputType='text'
                        value={form.name}
                        handleChange={(e) => setForm({ ...form, name: e.target.value })}    
                        />
                    <FormField 
                        labelName='Description'
                        placeholder='Enter description of item'
                        isTextArea={true}
                        value={form.description}
                        handleChange={(e) => setForm({ ...form, description: e.target.value })}
                    />
                    <FormField 
                        labelName='Seller'
                        placeholder='Enter your name'
                        inputType='text'
                        value={form.seller}
                        handleChange={(e) => setForm({ ...form, seller: e.target.value })}         
                    />
                    <FormField
                        labelName='Price'
                        placeholder='Enter price of item'
                        inputType='number'
                        value={form.price}
                        handleChange={(e) => setForm({ ...form, price: e.target.value })}
                    />
                    <FormField
                        labelName='Image URL'
                        placeholder='Enter image URL'
                        inputType='url'
                        value={form.url}
                        handleChange={(e) => setForm({ ...form, url: e.target.value })}
                    />
                    <FormField
                        labelName='Telegram Handle'
                        placeholder='Enter your Telegram handle'
                        inputType='text'
                        value={form.telegramHandle}
                        handleChange={(e) => setForm({ ...form, telegramHandle: e.target.value })}
                    />
                    
                </div>
                <div className='flex justify-center items-center'>
                        <CustomButton type='filled' title="Submit new Listing" customStyles="w-fit px-4 py-4 font-bold text-l" />
                    </div>
            </form>
            </div>
            </motion.div>
            <motion.div
                    className="absolute z-20 top-5 right-5"
                    {...fadeAnimation}
                >
                    <CustomButton 
                    type="filled"
                    title="Go Back"
                    handleClick={() => {
                        state.createListing = false;
                    }}
                    customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                    />
                </motion.div>
            </>)}
        </AnimatePresence> 
    )
}

export default CreateListing