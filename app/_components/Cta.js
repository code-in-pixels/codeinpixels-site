"use client"

import Image from 'next/image'
import React from 'react'
//import ArrowLink from "../../public/assets/link-arrow.svg"
//mport { useRouter } from 'next/navigation'


const Cta = () => {
  // const router = useRouter();

  // const messageBtn = () => {
  //   router.push("/contact");
  //   console.log("click")
  // }

  return (
    <section className='lg:mt-52 lg:mb-24'>
      <div className='flex text-white bg-white/10 border-y border-sand/15 mb-16 overflow-hidden'>
        <ul className='flex justify-between gap-8 items-center shrink-0 select-none cta-banner py-4 text-[13px] tracking-[1.5px] font-normal uppercase font-satoshi'>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
        </ul>

        {/* Duplicate Content */}
        <ul className='flex justify-between gap-8 items-center shrink-0 select-none cta-banner py-4 text-[13px] tracking-[1.5px] font-normal uppercase font-satoshi' aria-hidden="true">
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
          <li>
            Let’s talk
          </li>
          <li>
            +++
          </li>
        </ul>
      </div>
      <div>
        <h5 className='text-[13px] uppercase text-center text-white font-satoshi font-normal'>Project In Mind?</h5>
        <h2 className='text-sand text-center text-[calc(2rem_+_4vw)] md:text-8xl font-normal max-w-[840px] mx-auto my-4 font-satoshi'>
          Let’s make your <span className='font-gambetta italic'>Website shine</span>
        </h2>
        <p className='max-w-[450px] mx-auto text-center text-xl text-white/60 font-normal font-chillax'>
          Premium web design, webflow, and SEO services to help your business stand out.
        </p>
        {/* <button className='rounded-[2px] bg-[#a2d2ff] py-2.5 px-4 flex items-center gap-2 text-black uppercase tracking-[1.5px] text-[13px] font-normal font-satoshi mx-auto mt-8 cursor-pointer' onClick={messageBtn}>
          Get in touch
          <div>
            <Image
              src={ArrowLink}
              alt='Arrow link icon'
            />
          </div>
        </button> */}
      </div>

    </section>
  )
}

export default Cta