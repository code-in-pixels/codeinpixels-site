"use client"

import React, { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

const contact = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [waitlistModal, setWaitlistModal] = useState(false);

  
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, message } = userDetails;

    const templateParams = {
      email: email,
      name: name,
      message: message,
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_PUBLIC_KEY,
      console.log("sent", userDetails)
    ).then((response) => {
      console.log('Email sent successfully!', response);
      console.log(userDetails)
      setUserDetails({ name: "", email: "", message: "" })
    }).catch((error) => {
      console.log('Something went wrong...', error);
    }).finally(() => {
      setLoading(false)
      // Show the waitlist modal
      setWaitlistModal(true);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission here, including the attachment if it's not null.
    // For example, you can use the FormData API to send the form data to a server.

    setActive(false);

    //send mail
    sendEmail(e);
  };

  useEffect(() => {
    if (userDetails.name && userDetails.email && userDetails.message) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [userDetails.email, userDetails.message, userDetails.name]);

  return (
    <main className="flex flex-col lg:flex-row items-center justify-between gap-[20px] mt-40 rounded-[2px] lg:mb-0 mb-16">
      <form
        action=""
        className="max-w-[600px] w-full border border-white/15 bg-white/5 md:p-12 p-6"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <h4 className='text-[13px] tracking-[1.5px] text-sand/60 uppercase font-normal font-satoshi'>Contact</h4>
        <h2 className='text-white text-5xl font-light font-satoshi'>Let’s get in touch.</h2>

        <div className="mt-8 py-5">
          <div>
            <input
              type="text"
              className="py-4 px-6 rounded-[2px] border border-white/15 bg-white/5 placeholder:uppercase text-[13px] outline-none text-white placeholder:text-sand w-full font-normal font-satoshi"
              placeholder="Name"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
            />
          </div>

          <div className='my-4'>
            <input
              type="email"
              className="py-4 px-6 rounded-[2px] border border-white/15 bg-white/5 placeholder:uppercase text-[13px] outline-none text-white placeholder:text-sand w-full font-normal font-satoshi"
              placeholder="Email"
              name="email"
              value={userDetails.email}
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="text"
              className="py-4 px-6 rounded-[2px] border border-white/15 bg-white/5 placeholder:uppercase text-[13px] outline-none text-white placeholder:text-sand w-full font-normal font-satoshi"
              placeholder="Message"
              name="message"
              value={userDetails.message}
              required
              onChange={handleChange}
            />
          </div>


        </div>

        <button
          className={`w-full rounded-[2px] px-4 py-2.5 border ${active ? "opacity-100" : "opacity-40"} text-[13px] tracking-[1.5px] bg-black/50 text-[#fff] font-normal font-satoshi uppercase cursor-pointer`}
          disabled={!active}
          onClick={handleSubmit}
          ref={formRef}
        >
            {loading ? "Sending..." : "Send Message"}

        </button>
      </form>

      <div className="lg:block hidden lg:w-[380px]">
        <div className="w-full flex flex-col justify-center">
          <div className="border border-white/15 bg-white/5 p-6  rounded-[20px] flex items-center rounded-20 gap-4 cursor-pointer">
            <div className="rounded-full h-[76px] w-[76px] flex items-center justify-center ml-3 group-hover:translate-x-10 transition-all duration-[750ms] ease-in-out">
              <a
                href="mailto:contact@codeinpixels.com"
                target="_blank"
                rel="noreferrer"
              >
                {/* <Image
                  src={email}
                  alt="icon"
                  className="h-[76px] w-[76px] rounded-full"
                /> */}
              </a>
            </div>

            <div className="gap-4 group-hover:translate-x-10 transition-all duration-[750ms] ease-in-out">
              <h3 className="font-bold text-[26px] leading-[32px] tracking-[0.5px] font-satoshi">
                <a
                  href="mailto:contact@codeinpixels.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sand/60"
                >
                  Email
                </a>
              </h3>
              <p className="text-base text-white font-Chillax">
                <a
                  href="mailto:contact@codeinpixels.com"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  Send us a mail
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </main >
  )
}

export default contact