import React from 'react'

const CustomButton = ({ buttonText, myclass, customOnClick, mySvg }) => {
  return (
    <button
      onClick={customOnClick}
      className={`${myclass} !font-sunflower font-bold text-base leading-5 flex items-center gap-[10px] transition-all duration-300 button-arrow`}
    >
      {buttonText}
      {mySvg}
    </button>
  )
}

export default CustomButton
