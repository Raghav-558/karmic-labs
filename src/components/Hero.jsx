import React from 'react'
import Header from '../common/Header'
import CustomButton from '../common/CustomButton'
import HeroImage from '../assets/images/hero-nubbies.webp'
import { ButtonArrow, HeroArrowIcon } from '../utils/icons'
import TopLine from '../assets/images/text-bottom-line.webp'
import BottomLine from '../assets/images/text-top-line.webp'

const Hero = () => {
  return (
    <>
      <div className='relative max-w-[1440px] mx-auto' id='home'>
        <div className='absolute size-[184px] rounded-full bg-white shadow-[5px_4px_1px_1px] blur-[130px] -z-10 shadow-white -left-[10%] -top-[8%]'></div>
        <div className='max-w-[1172px] mx-auto px-4'>
          <Header />
        </div>
        <div className='bg-hero-layer bg-no-repeat min-h-[726px] max-sm:h-[760px] bg-cover bg-top -mt-2.5 relative'>
          <div className=' max-w-[1172px] mx-auto px-4'>
            <div className='flex flex-wrap pt-[163px] max-lg:pt-[60px] max-md:pt-[60px]'>
              <div className='w-7/12 max-lg:w-full'>
                <h1 className='font-sunflower font-light text-[64px] leading-[69.53px] text-white lg:max-w-[570px] max-lg:text-center uppercase max-lg:text-6xl max-md:text-5xl max-sm:text-4xl'>
                  We are believers decentralization and {''}
                  <span className='relative'>
                    <img
                      className='absolute -top-3 right-0 max-sm:-top-2 max-sm:right-2 max-w-[158px] max-sm:max-w-[90px] w-full'
                      src={TopLine}
                      alt='top-line'
                    />
                    Web3.
                    <img
                      className='absolute -bottom-[2px] left-2 max-sm:top max-w-[169px] max-sm:max-w-[90px] w-full'
                      src={BottomLine}
                      alt='bottom-line'
                    />
                  </span>
                </h1>
                <p className='font-spacegrotest leading-[28.8px] text-base font-normal text-white lg:max-w-[500px] max-lg:text-center pt-[13px] max-sm:text-sm'>
                  Vulputate tristique habitant neque, accumsan. Vitae ultrices
                  nulla erat nibh aliquam, quis tempus volutpat arcu. Leo
                  convallis luctus dis malesuada turpis non consequat ac.
                </p>
                <div className='flex items-center gap-8 pt-10 max-md:pt-5 max-lg:justify-center'>
                  <CustomButton
                    buttonText={'Get Started'}
                    myClass={
                      'bg-white text-light-black py-[11.2px] px-6 rounded-[82px] hover:bg-transparent hover:text-white border border-transparent hover:border-white'
                    }
                    mySvg={
                      <ButtonArrow myClass='transition-all duration-300 button-arrow' />
                    }
                  />
                  <CustomButton
                    buttonText={'Read More'}
                    myClass={
                      'bg-transparent font-light text-white py-[11.2px] px-[31.5px] border border-white rounded-[82px] hover:bg-white hover:text-light-black transition-all duration-300'
                    }
                  />
                </div>
              </div>
              <div className='w-5/12 max-lg:w-full max-lg:pt-8'>
                <img
                  src={HeroImage}
                  alt='hero-section-image'
                  className='max-w-[398px] mx-auto max-md:max-w-[300px]'
                />
              </div>
            </div>
          </div>
          <HeroArrowIcon myClass='' />
        </div>
      </div>
    </>
  )
}

export default Hero
