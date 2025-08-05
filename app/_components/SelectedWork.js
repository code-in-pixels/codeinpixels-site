import React from 'react'

const works = [
  {
    id: 1,
    num: "01",
    serviceName: "Web Design",
    serviceText: "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs."
  },
  {
    id: 2,
    num: "02",
    serviceName: "Development",
    serviceText: "Get custom development solutions that are tailored to your needs, designed to deliver a flawless user experience."
  },
  {
    id: 3,
    num: "03",
    serviceName: "Content & SEO",
    serviceText: "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results."
  },
  {
    id: 4,
    num: "04",
    serviceName: "Content & SEO",
    serviceText: "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results."
  }
]

const SelectedWork = () => {
  return (
    <section className='pt-24'>
      <h2 className='text-sand text-[40px] font-light font-satoshi tracking-[1px]'>Selected <span className='font-gambetta italic'>Work</span></h2>
      <div className='grid md:grid-cols-[repeat(auto-fit,minmax(500px,1fr))] items-center gap-8  py-4'>
        {works.map((service) => (
          <div className='border border-white/15 bg-white/15 p-12 rounded-[2px] shadow-[0_4px_4px_0_#00000040] h-[513px]' key={service?.id}>
            <p className='text-[13px] text-sand font-satoshi'>{service?.num}</p>
            <h3 className='text-2xl text-sand tracking-[1px] font-satoshi font-light uppercase'>{service?.serviceName}</h3>
            <p className='text-base font-normal font-chillax text-white/60'>{service?.serviceText}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default SelectedWork