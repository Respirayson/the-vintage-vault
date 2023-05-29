import React from 'react'
import CustomButton from './CustomButton';

import state from '../store';

const RotateShirt = () => {
  
    return (
        <div className="arrow-container">
        <div className="flex-1 flex flex-col">
          <p className="py-1.5 px-2 rounded-md text-s text-gray-700 w-fit">
            Rotate Shirt
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            <CustomButton 
                type="filled"
                title="Left"
                handleClick={() => state.rotationZ += 0.025}
                customStyles="text-xs"
            />
            <CustomButton 
                type="filled"
                title="Right"
                handleClick={() => state.rotationZ -= 0.025}
                customStyles="text-xs"
            />
            </div>
        </div>
  
        
      </div>
    )
}

export default RotateShirt