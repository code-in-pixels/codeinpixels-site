"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
// import Logo from "../../public/assets/logo-bg.png"
// import Image from 'next/image'

const navLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  // {
  //   id: 2,
  //   name: 'Services',
  //   link: '/services',
  // },
  // {
  //   id: 3,
  //   name: 'Work',
  //   link: '/work',
  // },
  {
    id: 4,
    name: 'Contact',
    link: '/contact',
  },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const messageBtn = () => {
    router.push("/contact");
  }

  return (
    <header className='max-w-[594px] w-[inherit] mx-auto mt-12 block fixed inset-0 z-20'>
      <nav className='rounded-[2px] border py-3 px-6 bg-sand/5 backdrop-blur-[30px] border-sand/15 font-sato'>
        <ul className={`md:flex hidden items-center justify-around`}>
          {navLinks.map((links) => (
            <li key={links?.id} className=''>
              <Link href={links?.link} className='text-[13px] tracking-[1.5px] font-normal text-white font-satoshi uppercase'>{links?.name}</Link>
            </li>
          ))}
          <li>
            <button className='uppercase px-4 py-2.5 bg-[#a2d2ff] text-black rounded-[2px] tracking-[1.5px] text-[13px] font-normal cursor-pointer font-satoshi' onClick={messageBtn}>
              Let's Talk
            </button>
          </li>
        </ul>

        <div className='flex justify-between items-center md:hidden'>
          {/* <div>
            <Image
              src={Logo}
              alt='CodeInPixels Logo'
            />
          </div> */}

          <div className='flex items-center gap-6'>
            <button className='uppercase px-4 py-2.5 bg-[#a2d2ff] text-black rounded-[2px] tracking-[1.5px] text-[13px] font-normal cursor-pointer font-satoshi' onClick={messageBtn}>
              Let's Talk
            </button>
          </div>

          <div>

            <button className='block md:hidden ' aria-labelledby='Menu Toggle Button' onClick={toggleMobileMenu}>

                {isMenuOpen
                  ?
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" className='fill-current text-white'>
                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                  </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" className='fill-current text-white'>
                    <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
                  </svg>
                }


            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen ? (
        <nav className='rounded-[2px] border py-3 px-6 bg-sand/5 backdrop-blur-[30px] border-sand/15 mt-4'>
          <ul className={`flex flex-col gap-6 items-center justify-center md:hidden`}>
            {navLinks.map((links) => (
              <li key={links?.id} className=''>
                <Link href={links?.link} className='text-[13px] tracking-[1.5px] font-normal text-white font-satoshi-regular uppercase'>{links?.name}</Link>
              </li>
            ))}
            <li>
            </li>
          </ul>
        </nav>

      ) :
        null
      }
    </header>
  )
}

export default Header;