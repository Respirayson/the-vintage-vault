import { useState } from 'react';
import { useSnapshot } from 'valtio';
import { AnimatePresence } from 'framer-motion';
import state from '../store';
import { motion } from 'framer-motion';

import { fadeAnimation } from '../config/motion';
import { DisplayListing, CustomButton } from '../components';


const Marketplace = () => {
    const snap = useSnapshot(state);

    const [itemIndex, setItemIndex] = useState(0); // State for index of item to be displayed


    return (
        <AnimatePresence>

            {snap.marketplace && (<>
                <motion.div
                    key="custom25"
                    className="absolute top-12 left-12 z-10"
                    {...fadeAnimation}
                >
                    <DisplayListing itemIndex={itemIndex} />

                </motion.div>
                <motion.div
                    className="absolute z-10 top-5 right-5"
                    {...fadeAnimation}
                >
                <CustomButton 
                    type="outline"
                    title="Create Listing"
                    handleClick={() => {
                        state.createListing = true;
                    }}
                    customStyles="w-fit px-4 py-2.5 font-bold text-sm mr-4"
                    />
                <CustomButton 
                    type="filled"
                    title="Go Back"
                    handleClick={() => {
                        state.marketplace = false;
                        state.intro = true;
                        state.mainImage = true;
                    }}
                    customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                    />

                </motion.div>
                <motion.div className='absolute bottom-36 z-10 right-24' key="custom26" {...fadeAnimation}>
                        {itemIndex > 0 && (<CustomButton 
                                        type="filled"
                                        title="Back"
                                        handleClick={() => setItemIndex(itemIndex - 3)}
                                        customStyles="w-fit px-9 py-2.5 font-bold text-xl mr-4"
                                    />)}
                        {itemIndex < snap.filteredCount && (<CustomButton 
                            type="filled"
                            title="Forward"
                            handleClick={() => setItemIndex(itemIndex + 3)}
                            customStyles="w-fit px-4 py-2.5 font-bold text-xl"
                        />)}
                </motion.div>
          </>)}

        </AnimatePresence>
    )
}

export default Marketplace