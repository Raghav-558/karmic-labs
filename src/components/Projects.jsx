import React from 'react'
import SubHeading from '../common/SubHeading'
import BlackLine from '../assets/images/black-lines.webp'
import { PROJECTS_LISTS } from '../utils/helper'
import CustomButton from '../common/CustomButton'

const Projects = () => {
  return (
    <div
      id='projects'
      className='bg-white-layer max-md:bg-white bg-cover bg-top min-h-[902px] max-xl:h-[1065px] max-lg:h-[1050px] max-md:h-full'
    >
      <div className='max-w-[1172px] mx-auto px-4 max-md:pb-[60px]'>
        <div className='pt-[96px] max-md:pt-[60px]'>
          <SubHeading
            text={'Projects'}
            myclass={'!text-black'}
            myImage={BlackLine}
          />
          <p className='max-w-[532px] mx-auto text-center pt-6 text-light-black max-sm:text-sm font-spacegrotest'>
            Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh
            egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna
            id nisl quis vestibulum rhoncus.
          </p>
        </div>
        <div className='flex flex-wrap -mx-3 pt-[29px] max-md:pt-2 max-sm:pt-0 justify-center'>
          {PROJECTS_LISTS.map((obj, i) => (
            <div key={i} className='w-3/12 max-xl:w-1/3 max-md:w-1/2 max-sm:w-full px-2 max-sm:px-4 pt-6'>
              <div className='mx-auto hover:scale-125 hover:!z-20 overflow-hidden group max-lg:hover:scale-105 transition-all relative duration-300 cursor-pointer flex w-full rounded-lg justify-center'>
                <img
                  src={obj.image}
                  alt='projects-image'
                  className='h-[174px] object-cover w-full rounded-lg pointer-events-none'
                />
                <div className='absolute min-h-[47px] flex justify-center items-center bg-dark-gray transition-all duration-300 w-full group-hover:bottom-0 bottom-[-50%]'>
                  <p className='font-sunflower font-bold text-xl leading-[21.7px] text-white text-center w-full'>
                    {obj.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center pt-14 max-lg:pt-10 max-md:pt-8'>
          <CustomButton
            buttonText={'View All'}
            myclass={
              'font-medium border border-light-black text-light-black font-sunflower py-[11.5px] px-8 rounded-[82px] hover:bg-black hover:text-white transition-all duration-300'
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
