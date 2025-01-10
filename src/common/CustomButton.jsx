import React from 'react'

const CustomButton = ({ buttonText, myClass, customOnClick ,mySvg }) => {
  return (
    <button
      onClick={customOnClick}
      className={`${myClass} !font-sunflower font-bold text-base leading-5 flex items-center gap-[10px]`}
    >
      {buttonText}
      {mySvg}
    </button>
  )
}

export default CustomButton
