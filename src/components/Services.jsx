import React from 'react'
import { SERVICES_LIST } from '../utils/helper'
import SubHeading from '../common/SubHeading'

const Services = () => {
  return (
    <div
      id='services'
      className='relative pb-[136px] max-w-[1440px] mx-auto max-md:py-16 max-sm:py-[60px]'
    >
      <div className='absolute size-[209px] rounded-full left-[-80px] bottom-[-60px] bg-white blur-[110px] '></div>
      <div className='max-w-[1145px] w-full mx-auto flex flex-col'>
        <SubHeading text='services' />
        <div className='flex pt-[77px] max-lg:pt-16 max-md:pt-8 gap-y-10 flex-wrap max-lg:justify-center'>
          {SERVICES_LIST.map((item, i) => (
            <div key={i} className='w-1/3 max-md:w-1/2 max-sm:w-full px-2'>
              <div className='p-5 relative z-10 transition-all duration-300 border border-transparent hover:border-white hover:border-opacity-10 rounded-xl box-shadow hover:bg-white hover:bg-opacity-10'>
                {item.icon}
                <h3 className='font-bold text-xl leading-[26px] font-spacegrotest text-white max-md:text-lg pt-5'>
                  {item.title}
                </h3>
                {item.description && (
                  <p className='max-sm:text-sm text-white leading-6 pt-[6px] font-spacegrotest lg:max-w-[329px]'>
                    {item.description}
                  </p>
                )}
                {item.list && Array.isArray(item.list) && (
                  <ul className='list-disc list-inside max-sm:text-sm text-white pt-1.5 font-spacegrotest'>
                    {item.list.map((listItem, subIndex) => (
                      <li key={subIndex}>{listItem}</li>
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
