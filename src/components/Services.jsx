import React from 'react'
import { SERVICES_LIST } from '../utils/helper'
import SubHeading from '../common/SubHeading'
import WhiteLine from '../assets/images/heading-lines.webp'

const Services = () => {
  return (
    <div
      id='services'
      className='relative max-w-[1440px] mx-auto max-md:py-[60px]'
    >
      <div className='absolute size-[209px] rounded-full left-[-120px] bottom-[-100px] bg-white blur-[90px]'></div>
      <div className='max-w-[1172px] px-4 w-full mx-auto flex flex-col'>
        <SubHeading text={'services'} myImage={WhiteLine} />
        <div className='flex pt-[77px] max-lg:pt-16 max-md:pt-10 gap-y-10 flex-wrap max-lg:justify-center'>
          {SERVICES_LIST.map((obj, i) => (
            <div
              key={i}
              className='w-1/3 max-md:w-1/2 max-sm:w-full relative group max-h-max'
            >
              <div className='absolute -top-[20px] -right-4 -z-10 hidden group-hover:block transition-all duration-300 ease-in-out'>
                <img
                  src={obj.circle}
                  alt='circle-image'
                  className='size-[74px]'
                />
              </div>
              <div className='p-5 max-md:p-4 relative group transition-all duration-300 border border-transparent hover:border-white hover:border-opacity-10 rounded-xl box-shadow hover:bg-white max-w-[369px] mx-auto hover:bg-opacity-10 cursor-pointer'>
                {obj.icon}
                <h3 className='font-bold text-xl leading-[26px] font-spacegrotest text-white max-sm:text-lg pt-5'>
                  {obj.title}
                </h3>
                {obj.description && (
                  <p className='max-sm:text-sm text-white leading-6 pt-[6px] font-spacegrotest max-w-[300px] max-sm:max-w-none'>
                    {obj.description}
                  </p>
                )}
                {obj.list && Array.isArray(obj.list) && (
                  <ul className='list-disc list-inside max-sm:text-sm text-white pt-1.5 font-spacegrotest'>
                    {obj.list.map((listobj, subIndex) => (
                      <li key={subIndex}>{listobj}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
