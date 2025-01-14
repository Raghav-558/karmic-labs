import React from 'react'
import { KARMIC_LIST } from '../utils/helper'
import SubHeading from '../common/SubHeading'
import WhiteLine from '../assets/images/heading-lines.webp'

const Karmic = () => {
  return (
    <div
      id='about'
      className='pt-[81.5px] pb-[156px] max-md:py-[60px] max-lg:py-20 relative max-w-[1140px] mx-auto'
    >
      <div className='absolute size-[184px] rounded-full bg-white blur-[100px] right-0 -top-20'></div>
      <div className='max-w-[1172px] px-4 mx-auto'>
        <SubHeading
          text={'Who is karmic?'}
          myImage={WhiteLine}
        />
        <p className='pt-[18px] text-white text-center font-spacegrotest leading-7 max-sm:text-sm'>
          We are builders, innovaters, and believers.
        </p>
        <p className='pt-[2px] text-white text-center font-spacegrotest max-sm:text-sm max-w-[525px] mx-auto leading-7'>
          We believe in a future that rests in your hands, and yours alone. The
          future is decentralized, The future is web3.
        </p>
        <div className='flex items-center justify-center gap-4 pt-10 max-xl:flex-wrap'>
          {KARMIC_LIST.map((obj, i) => (
            <img
              key={i}
              src={obj.image}
              alt={obj.alt}
              className='h-[223px] object-cover rounded-lg pointer-events-none'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Karmic
