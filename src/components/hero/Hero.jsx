import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import HeroImgDark from "./Hero_dark.png";
import HeroImgLight from "./Hero_light.png"; 
import {useContext } from "react";
import ThemeContext from "../../context/ThemeContext";


const Hero = () => {

  const {myMode} = useContext(ThemeContext);

console.log(myMode)
  return (
    <div id="home" className={`hero-bg bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className="full-name text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Abdeldjalil Dahmani
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Full Stack",
                2000,
                "Web Developer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="fswd-text text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <span
              // data-aos="fade-up"
              className="hero-text text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Let's find out together what I can do 🧐
            </span>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="https://www.upwork.com/freelancers/~01308e511e4ab56c64"
              className="nav-bar-hire bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href="https://res.cloudinary.com/dlszo5c4l/image/upload/v1704143226/My_Resume_ub169m.pdf"
              target="_blank"
              className="nav-bar-resume flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/jeo17" target="_blank" >
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/abdeldjalil-dahmani-805b49276/" target="_blank">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/jeo.dmn/" target="_blank">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/abdo.blankos " target="_blank">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
            style={{scale:"1.18"}}
            data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src={myMode === "dark" ? HeroImgDark : HeroImgLight}
              // src={mine}
              alt={"HeroImg"}
            />
            <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div data-aos="zoom-in" data-aos-duration="1000"  className=" relative cursor-pointer">
             {/*    <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                <FaPlay
                  className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                />*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
