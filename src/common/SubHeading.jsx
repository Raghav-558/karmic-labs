import React from 'react'
import HeadingLine from '../assets/images/heading-lines.webp'

const SubHeading = ({ text, myClass }) => {
  return (
    <h2
      className={`${myClass} font-sunflower font-light text-[56px] leading-[60.86px] text-white text-center max-lg:text-[40px] max-sm:text-3xl relative uppercase`}
    >
      {text}
      <img
        src={HeadingLine}
        alt='title-line'
        className='absolute -top-[21px] left-1/2 -translate-x-1/2 max-w-[400px] max-md:max-w-[300px]'
      />
    </h2>
  )
}

export default SubHeading
