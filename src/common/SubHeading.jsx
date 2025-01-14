import React from 'react'

const SubHeading = ({ text, myclass, myImage }) => {
  return (
    <h2
      className={`${myclass} font-sunflower font-light text-[56px] leading-[60.86px] text-white text-center max-lg:text-[50px] max-md:text-[40px] max-sm:text-3xl relative uppercase`}
    >
      {text}
      <img
        src={myImage}
        alt='title-line'
        className='absolute -top-[28px] left-1/2 -translate-x-1/2 max-w-[400px] max-md:max-w-[300px] max-md:top-[-10px] max-sm:top-[-20px] pointer-events-none'
      />
    </h2>
  )
}

export default SubHeading
