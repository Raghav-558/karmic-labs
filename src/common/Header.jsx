import React, { useState, useEffect } from 'react'
import { HEADER_LIST } from '../utils/helper'
import CustomButton from './CustomButton'
import logo from '../assets/images/page-logo.webp'
import { CloseIcon, MenuIcon } from '../utils/icons'

const Header = () => {
  const [open, setOpen] = useState()

  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 1025) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    }
    handleOverflow()
    window.addEventListener('resize', handleOverflow)
    return () => {
      window.removeEventListener('resize', handleOverflow)
    }
  }, [open])

  return (
    <>
      <div className='flex items-center justify-between w-full pt-[11px]'>
        <a href='#logo'>
          <img
            src={logo}
            alt='page-logo'
            className='h-[60px] pointer-events-none max-lg:h-10'
          />
        </a>
        <ul className='flex items-center justify-between gap-10 max-lg:hidden'>
          {HEADER_LIST.map((obj, i) => (
            <li key={i}>
              <a
                href={obj.link}
                className='font-medium font-sunflower text-base leading-5 text-white hover:text-dark-blue transition-all duration-300'
              >
                {obj.title}
              </a>
            </li>
          ))}
        </ul>
        <CustomButton
          buttonText={'Connect Wallet'}
          myclass={
            'max-lg:hidden rounded-[82px] py-[11.4px] px-8 bg-white button-bg hover:text-white border border-transparent hover:border-white hover:bg-black transition-all duration-300'
          }
        />
        <div
          className={`md:hidden z-30 cursor-pointer`}
          onClick={() => setOpen(!open)}
        >
          <div className={`flex flex-col gap-[4px] items-center`}>
            <div
              className={`h-[2px] bg-white w-8 transition-all duration-300 ${
                open ? 'transform rotate-45 translate-y-[6px]' : ''
              } `}
            ></div>
            <div
              className={`h-[2px] bg-white w-8 transition-all duration-300 ${
                open ? 'opacity-0' : ''
              } `}
            ></div>
            <div
              className={`h-[2px] bg-white w-8 transition-all duration-300 ${
                open ? 'transform -rotate-45 -translate-y-[6px]' : ''
              } `}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`fixed flex flex-col justify-center items-center transition-all duration-500 w-full h-full left-0 lg:-top-full z-20 bg-black ${
          open ? 'top-0 left-0' : '-top-full'
        }`}
      >
        <ul className='flex flex-col items-center gap-8'>
          {HEADER_LIST.map((obj, i) => (
            <li key={i}>
              <a
                onClick={() => setOpen(false)}
                href={obj.link}
                className='text-base leading-5 font-medium font-sunflower text-white hover:text-dark-blue transition-all duration-300'
              >
                {obj.title}
              </a>
            </li>
          ))}
          <CustomButton
            customOnClick={() => setOpen(false)}
            buttonText={'Connect Wallet'}
            myclass={
              'rounded-[82px] py-[11.4px] px-[27.5px] bg-white button-bg hover:text-white border border-transparent hover:border-white hover:bg-black transition-all duration-300'
            }
          />
        </ul>
      </div>
    </>
  )
}

export default Header
