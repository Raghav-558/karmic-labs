import React from 'react'
import { KARMIC_LIST, UPCOMING_PRODUCTS_LIST } from '../utils/helper'
import SubHeading from '../common/SubHeading'
import CustomButton from '../common/CustomButton'
import WhiteLine from '../assets/images/heading-lines.webp'

const Karmic = () => {
  return (
    <div
      id='about'
      className='pt-[81.5px] pb-[156px] max-md:py-[60px] max-lg:py-20 relative'
    >
      <div className='absolute size-[184px] rounded-full bg-white blur-[100px] right-0 -top-20'></div>
      <div className='max-w-[1172px] px-4 mx-auto'>
        <SubHeading
          text={'Who is karmic?'}
          myImage={WhiteLine}
          myclass={'bottom-'}
        />
        <p className='pt-[18px] text-white text-center font-spacegrotest leading-7'>
          We are builders, innovaters, and believers.
        </p>
        <p className='pt-[2px] text-white text-center font-spacegrotest max-w-[525px] mx-auto leading-7'>
          We believe in a future that rests in your hands, and yours alone. The
          future is decentralized, The future is web3.
        </p>
        ;
        <div className='flex items-center flex-wrap gap-4 justify-center'>
          {KARMIC_LIST.map((obj, i) => (
            <div
              key={i}
              className='shadow-[_0px_4px_15px_0px] shadow-light-gray rounded-lg group overflow-hidden'
            >
              <img
                src={obj.image}
                alt={obj.alt}
                className='w-full max-w-[369px] pointer-events-none border border-white border-opacity-20 rounded-lg group-hover:border-transparent transition-all duration-300'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Karmic
