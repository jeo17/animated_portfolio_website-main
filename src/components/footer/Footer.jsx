import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto mt-16 sm:h-[250px]">
      <div className="footer-bg bg-yellow-400 h-full flex flex-col gap-8 items-center p-10 ">
        <h2 
        data-aos="zoom-out"
         className=" footer-text font-bold text-5xl sm:text-3xl">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a 
          data-aos="fade-up" data-aos-duration="1000"

            href="https://www.facebook.com/abdo.blankos"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaFacebookSquare className="footer-icons text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Facebook</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href="tel:+213799593757"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className="footer-icons text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://www.instagram.com/jeo.dmn"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className="footer-icons text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
