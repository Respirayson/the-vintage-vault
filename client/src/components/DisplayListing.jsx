import React from 'react'
import { Listing } from '.'
// import { shirt1 } from '../assets';
import { useSnapshot } from 'valtio';
import state from '../store';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeAnimation } from '../config/motion';
import { CustomButton } from '../components';

const DisplayListing = ({ itemIndex }) => {

   const snap = useSnapshot(state);

   const [category, setCategory] = useState(''); // State for selected category
   const [priceRange, setPriceRange] = useState([0, 100]); // State for selected price range
   const [filteredItems, setFilteredItems] = useState(snap.listings); // State for filtered items

   // Function to handle filter criteria changes
   const handleFilterChange = () => {
      const filtered = snap.listings.filter(item =>
         (category ? item.category === category : true)
         && item.price >= priceRange[0] && item.price <= priceRange[1]
      );
      setFilteredItems(filtered);
      snap.filteredCount = filtered.length;
   };

   const listingsList = filteredItems.map((listing, id) => {
      return (
         <motion.div key="custom1"
         className="top-12 left-12 z-10"
         {...fadeAnimation}>
            <Listing 
               key={id}
               name={listing.name}
               price={listing.price}
               url={listing.url}
               description={listing.description}
               seller={listing.seller}
               tele={listing.telegramHandle}
               category={listing.category}
         />
         </motion.div>
         
      )
   })

  return (
    <div>
        <h1 className='font-semibold text-left text-[18px]'>All Listings &#40;{listingsList.length}&#41;</h1>

        <div className='flex flex-wrap mt-[20px] gap-[26px]'>

            <div className='w-[28px] h-[18px] mr-28'>
               <select className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" value={category} onChange={e => setCategory(e.target.value)}>
                     <option defaultValue>All Categories</option>
                     <option value="Electronics">Shirt</option>
                     <option value="Clothing">Pants</option>
                     {/* Add more options for other categories */}
                     </select>

                     <p className='text-semibold text-l mt-4'>Price:</p>
                     <div>{priceRange[0]}</div>
                     <input
                     className='mb-4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
                     type="range"
                     min="0"
                     max="1000"
                     value={priceRange[0]}
                     onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                     />

                     <div>{priceRange[1]}</div>
                     <input
                     className='mb-8 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
                     type="range"
                     min="0"
                     max="100"
                     value={priceRange[1]}
                     onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                     />

                     <CustomButton 
                        type="filled"
                        title="Apply Filter"
                        handleClick={handleFilterChange}
                        customStyles="text-xs"
                     />

            </div>
            {listingsList.length == 0 ? <div className='text-[18px]'>No listings found</div> : listingsList.slice(itemIndex, itemIndex + 3)}
        </div>
    </div>
  )
}

export default DisplayListing