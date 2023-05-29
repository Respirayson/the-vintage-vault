import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import ChatIcon from '@mui/icons-material/Chat';

import state from '../store';
import { reader } from '../config/helpers';
import { EditorTabs, UserTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { CustomButton, UploadFile, Tab, AdjustShirt, RotateShirt } from '../components';

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('');

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeUserTab, setActiveUserTab] = useState({
    tshirt: true,
  })

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "rotateshirt":
        return <RotateShirt />
      case "uploadfile":
        return <UploadFile
          file={file}
          setFile={setFile}
          readFile={readFile}
        />
      case "adjustshirt":
        return <AdjustShirt />
      default:
        return null;
    }
  }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if(!activeUserTab[decalType.UserTab]) {
      handleActiveUserTab(decalType.UserTab)
    }
  }

  const handleActiveUserTab = (tabName) => {
    switch (tabName) {
      case "tshirt":
          state.isFullTexture = !activeUserTab[tabName];
        break;
      default:
        state.isFullTexture = true;
        break;
    }

    // after setting the state, activeUserTab is updated

    setActiveUserTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  const readFile = (type) => {
    reader(file)
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  }

  return (
    <AnimatePresence>
      {!snap.intro && !snap.marketplace && !snap.createListing && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton 
              type="filled"
              title="Go Back"
              handleClick={() => {
                state.intro = false; 
                state.marketplace = true;
                }}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className='sharingtabs-container'
            {...slideAnimation("up")}
          >
            {UserTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isUserTab
                isActiveTab={activeUserTab[tab.name]}
                handleClick={() => handleActiveUserTab(tab.name)}
              />
            ))}
            <a className='text-xl' href={'https://t.me/' + state.telegramHandle}>Chat with me <ChatIcon /></a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer