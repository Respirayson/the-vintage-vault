import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

import { storeIcon } from '../assets';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src={storeIcon}
              alt="logo"
              className="w-28 h-28 object-contain rounded-full"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                3D Thrifting <br className="xl:block hidden" /> Marketplace.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
              Search for your favourite shirt with our brand-new 3D customization tool. <strong>Browse curated stores</strong>{" "} and define your own style.
              </p>

              <div className='flex flex-row gap-6'>
              <CustomButton 
                type="filled"
                title="Explore Listings"
                handleClick={() => {
                  state.intro = false;
                  state.marketplace = true;
                }}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
              <CustomButton 
                type="outline"
                title="Customise Shirt"
                handleClick={() => {
                  state.intro = false;
                  state.marketplace = false;
                  state.mainImage = false;
                }}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
              </div>
              
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home