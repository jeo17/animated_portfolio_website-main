import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Background
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Database Management Intern
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  At Saidal
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  April 2023 - June 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  During my internship at Groupe Saidal SPA, I gainedvaluable
                  experience as a Developer Intern, collaboratingwith
                  experienced developers and participating in variousprojects.
                  Key responsibilities included desktop
                  applicationdevelopment,Database management, maintenance,
                  andstaying updated on industry trends and technologies.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Bachelor in Informatic Systems
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Yahia Fares University - Medea
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  September 2019 - June 2023
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  I studied for three years at Dr. Yahya Fares University, in
                  which I obtained a BA. I also studied many subjects that make
                  me qualified in the field of programming and software (such
                  as: algorithm ,web dev ,app mobile ,operating system
                  ,databases ,binary system ... ) ,She also gained many
                  experiences and skills during this academic journey.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
