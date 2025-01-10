import React from 'react'
import { PRODUCTS_LIST } from '../utils/helper'
import SubHeading from '../common/SubHeading'

const Projects = () => {
  return (
    <div className='pt-[95px] pb-[136px] max-md:py-16 max-sm:pb-10 max-sm:pt-20 relative max-w-[1440px] mx-auto'>
      <div className='absolute h-[100px] w-[100px] rounded-full bg-white blur-[60px] right-0 bottom-0'></div>
      <div className='max-w-[1172px] px-4 mx-auto'>
        <SubHeading text={'upcoming projects'} />
        <div className='flex max-xl:flex-wrap gap-[29px] max-xl:justify-center pt-12'>
          {PRODUCTS_LIST.map((obj, i) => (
            <div className='p-4 border border-white border-opacity-10 rounded-xl card-shadow bg-white bg-opacity-10'>
              <img
                src={obj.image}
                alt='Projects-image'
                className='max-w-[231px] rounded-xl'
              />
              <div className='flex items-center justify-between pt-[15px]'>
                <p className='font-sunflower font-medium text-xl leading-6 text-white'>
                  {obj.title}
                </p>
                <p className='font-sunflower font-bold text-base leading-5 text-white'>
                  {obj.time}
                </p>
              </div>
              <p className='font-spacegrotest font-light text-base leading-7 text-white'>
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
