import React from 'react'

const services = [
  {
    id: 1,
    num: "01",
    serviceName: "Design",
    serviceText: "Visually stunning designs that captivates your audience and converts. Whether you're launching a startup or building your brand."
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
  }
]

const ServicesHome = () => {
  return (
    <section className='grid md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] items-center gap-8  pt-24'>
      {services.map((service) => (
        <div className='border border-white/15 bg-white/5 p-12 rounded-[2px] shadow-[0_4px_4px_0_#00000040]' key={service?.id}>
          <p className='text-[13px] mb-1 text-sand font-satoshi font-light'>{service?.num}</p>
          <h3 className='text-2xl text-sand tracking-[1px] font-satoshi font-light uppercase'>{service?.serviceName}</h3>
          <p className='text-base mt-2 font-normal font-chillax text-white/60'>{service?.serviceText}</p>
        </div>
      ))}

    </section>
  )
}

export default ServicesHome;