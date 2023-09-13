import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";



const Contact = () => {
  const [EmailMsg, setEmailMsg] = useState("");
  const [subject, setSubject] = useState('');
  const [senderEmail, setSenderEmail] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();

  
    const recipient = 'abdeldjalildh990@gmail.com';
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(EmailMsg)}&from=${encodeURIComponent(senderEmail)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}
      <div 
      // data-aos="fade-up"
       className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div 
            data-aos="zoom-in"
            >
              <h1 className="contact-text text-5xl font-bold sm:text-3xl">You Need</h1>
              <h3 className="contact-text text-xl sm:text-lg">
              Beautiful design for your website or managing your data Leave a request
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              
              data-aos="zoom-in"
              
              className= " text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className="footer-icons md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
            
            data-aos="zoom-in"
            
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="Email: example@email.com"
              name=""
              required
              onChange={(e) => setSenderEmail(e.target.value)}
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="Email Subject:"
              name=""
              onChange={(eo) => setSubject(eo.target.value)}
              required
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name=""
              id=""
              required
              onChange={(eo) => {
                setEmailMsg(eo.target.value)
              }}
            />
            <button
              className="contact-bg bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
