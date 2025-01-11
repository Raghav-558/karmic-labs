import React from 'react'
import { UPCOMING_PRODUCTS_LIST } from '../utils/helper'
import SubHeading from '../common/SubHeading'
import CustomButton from '../common/CustomButton'
import WhiteLine from '../assets/images/heading-lines.webp'

const UpcomingProjects = () => {
  return (
    <div
      className='pt-[95px] pb-[136px] max-lg:py-20 max-md:py-[60px] relative max-w-[1440px] mx-auto'
    >
      <div className='absolute size-[182px] rounded-full bg-white blur-[110px] right-0 bottom-0'></div>
      <div className='max-w-[1172px] px-4 mx-auto'>
        <SubHeading text={'upcoming projects'} myImage={WhiteLine} />
        <div className='flex max-xl:flex-wrap gap-[29px] max-xl:justify-center pt-12 max-md:pt-10'>
          {UPCOMING_PRODUCTS_LIST.map((obj, i) => (
            <div
              key={i}
              className='p-4 border border-white border-opacity-10 rounded-xl card-shadow bg-white bg-opacity-10'
            >
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
        <div className='flex justify-center pt-12 max-md:pt-8'>
          <CustomButton
            buttonText={'View All'}
            myclass={
              'font-medium border border-white text-white font-sunflower py-[11.5px] px-8 rounded-[82px] hover:bg-white hover:text-black transition-all duration-300'
            }
          />
        </div>
      </div>
    </div>
  )
}

export default UpcomingProjects
