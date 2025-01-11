import React from 'react'
import { SOCIAL_LIST } from '../utils/helper'
import FooterLogo from '../assets/images/footer-logo.webp'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer id='about' className='pt-[100px] max-lg:pt-20 max-md:pt-[60px] max-sm:pt-0'>
      <a href='/'>
        <img
          src={FooterLogo}
          alt='logo'
          className='w-full max-w-[255px] mx-auto'
        />
      </a>
      <div className='flex items-center gap-6 justify-center pt-[69px] max-md:pt-10'>
        {SOCIAL_LIST.map((obj, i) => (
          <div
            key={i}
            className='flex items-center justify-center rounded-full bg-white border border-white size-[35px] transition-all duration-300'
          >
            <a href={obj.link} target='_blank'>
              {obj.icon}
            </a>
          </div>
        ))}
      </div>
      <div className='w-full border border-solid border-white mt-4'></div>
      <p className='text-center font-normal text-base font-spacegrotest leading-[28.8px] opacity-70 text-white pt-4 pb-[18px] max-lg:py-3'>
        © Karmic labs {year}
      </p>
    </footer>
  )
}

export default Footer
