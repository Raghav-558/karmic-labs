import React from 'react'
import SubHeading from '../common/SubHeading'
import WhiteLine from '../assets/images/heading-lines.webp'
import { VALUES_LIST } from '../utils/helper'

const Values = () => {
  return (
    <div id='values' className='max-md:py-[60px]'>
      <div className='max-w-[1172px] px-4 w-full mx-auto flex flex-col'>
        <SubHeading text={'values'} myImage={WhiteLine} />
        <div className='flex pt-[77px] max-lg:pt-16 max-md:pt-10 gap-y-10 flex-wrap max-lg:justify-center'>
          {VALUES_LIST.map((obj, i) => (
            <div
              key={i}
              className='w-1/3 max-md:w-1/2 max-sm:w-full relative group max-h-max'
            >
              <div className='absolute -top-[20px] -right-4 lg:right-[-24px] -z-10 hidden group-hover:block transition-all duration-300 ease-in-out'>
                <img
                  src={obj.circle}
                  alt='circle-image'
                  className='size-[74px]'
                />
              </div>
              <div className='p-5 max-sm:p-4 relative group transition-all duration-300 border border-transparent hover:border-white hover:border-opacity-10 rounded-xl box-shadow hover:bg-white max-w-[369px] h-full mx-auto hover:bg-opacity-10 cursor-pointer'>
                {obj.icon}
                <h3 className='font-bold text-xl leading-[25.52px] font-spacegrotest text-white max-sm:text-lg pt-[10px]'>
                  {obj.title}
                </h3>
                {obj.description && (
                  <p className='max-sm:text-sm text-white leading-6 pt-[10px] font-spacegrotest max-w-[303px]'>
                    {obj.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Values
