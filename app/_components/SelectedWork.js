import React from 'react'
import Dope from "../../public/assets/dope.png";
import Atmgc from "../../public/assets/automagic-portfolio.png";
import Tc from "../../public/assets/portfolio.png";
import Country from "../../public/assets/country.png";
import ArrowLink from "../../public/assets/link-arrow.svg"
import Link from 'next/link';
import Image from 'next/image';

const works = [
  {
    id: 1,
    bg: Dope,
    projName: "DOPE",
    projText: "A production ready chrome extension that gamifies learning experience and connect users to a vibrant community of learners.",
    projLink: "https://dope.foundafrica.tech/"
  },
  {
    id: 2,
    bg: Atmgc,
    projName: "AutoMagic",
    projText: "Built a production-ready website for an agency using Next.js, Tailwind CSS, and Framer Motion",
    projLink: "https://www.atmgc.xyz/"
  },
  {
    id: 3,
    bg: Tc,
    projName: "TiredCoder",
    projText: "A fully functional portfolio site",
    projLink: "https://tired-coder.vercel.app/"
  },
  {
    id: 4,
    bg: Country,
    projName: "REST Countries App",
    projText: "REST Countries API is a web app that allows users to see all countries and their details when clicked.",
    projLink: "https://allcountry.vercel.app/"
  }
]

const SelectedWork = () => {
  return (
    <section className='pt-24'>
      <h2 className='text-sand text-[40px] font-light font-satoshi tracking-[1px]'>Selected <span className='font-gambetta italic'>Work</span></h2>
      <div className='grid md:grid-cols-[repeat(auto-fit,minmax(500px,1fr))] items-center gap-8  py-4'>
        {works.map((project) => (
          <Link href={project.projLink} className={`border border-white/15 p-12 rounded-[2px] shadow-[0_4px_4px_0_#00000040] h-[513px] cursor-pointer`} key={project?.id}
            style={{
              backgroundImage: `url(${project.bg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className='grid place-items-center h-[inherit]'>
              <div
                className='px-3 py-2 border rounded-full flex items-center bg-sand/5 border-sand/15 backdrop-blur-[30px] cursor-pointer'
              >
                <Image
                  src={ArrowLink}
                  alt='Arrow link icon'
                />
              </div>
              <div className='bg-white/15 border-white/15 border rounded-[2px] backdrop-blur-[30px] px-4 py-3 w-full'>
                <h3 className='text-2xl text-black tracking-[1px] font-satoshi font-light uppercase'>{project?.projName}</h3>
                <p className='text-base font-normal font-chillax text-white mt-1.5'>{project?.projText}</p>
              </div>
            </div>

          </Link>
        ))}
      </div>

    </section>
  )
}

export default SelectedWork