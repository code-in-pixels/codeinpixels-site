import React from 'react';

const steps = [
  {
    number: "01",
    subHeader: "Do we match",
    title: "DISCOVERY CALL",
    subParagraph: "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
    duration: "1 HOUR",
    content: [
      "We get to know each other better",
      "Understand the goals you have for your website",
      "Determine how I can best assist you"
    ],
    position: "right"
  },
  {
    number: "02",
    subHeader: "We need a plan",
    title: "CONCEPT & STRATEGY",
    subParagraph: "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.",
    duration: "",
    content: [
      "UX Design",
      "Wireframes",
      "Interactive Prototype"
    ],
    position: "left"
  },
  {
    number: "03",
    subHeader: "Some Magic",
    title: "WEB DESIGN",
    subParagraph: "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.",
    duration: "",
    content: [
      "High-end web design tailored to your brand",
      "Interactive prototype of the design"
    ],
    position: "right"
  },
  {
    number: "04",
    subHeader: "More Magic",
    title: "DEVELOPMENT",
    subParagraph: "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.",
    duration: "",
    content: [
      "Custom frontend website",
      "Products and design systems",
      "CMS integration"
    ],
    position: "left"
  },
  {
    number: "05",
    subHeader: "Ready to go",
    title: "WEBSITE ONBOARDING",
    subParagraph: "In a personal Framer workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized Framer video tutorials that you can access at any time. Edit your Framer website without a complicated backend or the need for an additional programmer. It's as simple as that.",
    duration: "",
    content: [
      "Personal workshop",
      "Personalized video tutorials",
      "Edit text and images directly on your website"
    ],
    position: "right"
  }
];

const Process = () => {
  return (
    <section className='py-24'>

      <h5 className='text-[13px] uppercase text-center font-normal text-white font-satoshi'>The Process</h5>
      <h2 className='text-sand text-center text-[calc(2.5rem_+_4vw)] font-normal font-satoshi max-w-[650px] mx-auto my-4'>
        Your Website <span className='font-gambetta italic'>in 5 Steps</span>
      </h2>
      <p className='max-w-[450px] mx-auto text-center text-xl text-white/60 font-normal lg:mb-44 font-chillax'>
        Our process ensures that we create a website tailored to your business needs.
      </p>

      <div className=" pt-16 lg:px-20">
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute top-0 left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-white/10"></div>

          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="relative mb-8 lg:mb-80 last:mb-0">
                <div className="flex flex-row gap-6 lg:gap-0 items-center">
                  {/* Number */}
                  <div className="flex-shrink-0 w-full contents lg:flex justify-center">
                    <div className="relative z-10 w-10 h-10 rounded-[50%] md:rounded-full bg-white text-black flex items-center justify-center font-normal font-satoshi text-sm">
                      {step.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full lg:w-[45%] mt-6 lg:mt-0 lg:absolute ${isEven ? "lg:right-0" : "lg:left-0"
                      }`}
                  >
                    <div className="bg-white/5 border border-white/10 rounded-md p-6">
                      <div className="flex flex-col mb-8">
                        <span className="text-xs font-chillax font-normal text-white ml-auto p-2 border border-sand/15 rounded-[2px] bg-white/5">{step.duration}</span>
                        <h4 className='text-sand/60 text-[13px] uppercase tracking-[1.5px] font-satoshi font-normal'>{step.subHeader}</h4>
                        <h3 className="text-2xl text-white font-light mt-1 mb-4 font-satoshi">{step.title}</h3>
                        <p className='text-white/60 text-base font-normal font-chillax'>{step.subParagraph}</p>
                        
                      </div>
                      <ul className="list-disc list-inside space-y-4 text-sm text-white/80">
                        {step.content.map((line, i) => (
                          <li key={i} className='text-white text-base font-chillax font-normal'>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Process;