import React from "react";
/*import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox"; */

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiRedux,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import "./Skills.css";
import { skillsSection } from "../../data/data";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>

        {/* content 
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>

            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={98} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={95} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={92}
                />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={92} />
                <ProgressBar
                  logo={<SiTailwindcss />}
                  name={"Tailwind CSS"}
                  value={85}
                />

              </div>
            </div>
          </div>
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoNodejs />}
                black={"white"}
                white={"black"}
                skill={"Node Js"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"white"}
                white={"black"}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiExpress />}
                black={"black"}
                white={"white"}
                skill={"Express Js"}
              />
              <SkillBox
                className=""
                logo={
                  <SiFirebase/>
                }
                black={"black"}
                white={"white"}
                skill={"Firebase"}
              />
              { <SkillBox
                className=""
                logo={
                  <SiRedux  />
                }
                black={"black"}
                white={"white"}
                skill={"Redux"}
              /> }
            </div>
          </div>
        </div>

*/}

{/*  Second design  */}

        <div>
          <div className="software-skills-main-div">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Front-End Skills:
            </p>

            <ul className="dev-icons">
              {skillsSection.frontSoftwareSkills.map((skills, i) => {
                return (
                  <li
                    key={i}
                    className={`software-skill-inline ${skills.className}`}
                    name={skills.skillName}
                  >
                    <i>
                      <skills.fontAwesomeClassname />
                    </i>
                    <p>{skills.skillName}</p>
                  </li>
                );
              })}

                  <li key="Mui" className="software-skill-inline mui">
                <i>
                  <svg
                    width="80"
                    height="80"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="custom-icon"
                  >
                    <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z" 
                          />
                  </svg>
                </i>
                <p>MaterialUI</p>
              </li>
            </ul>
          </div>

          <div className="software-skills-main-div">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Back-End Skills:
            </p>

            <ul className="dev-icons">
              {skillsSection.backSoftwareSkills.map((skills, i) => {
                return (
                  <li
                    key={i}
                    className={`software-skill-inline ${skills.className}`}
                    name={skills.skillName}
                  >
                    <i>
                      <skills.fontAwesomeClassname />
                    </i>
                    <p>{skills.skillName}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* icons */}
        {/* <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
        >
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/c-plus-plus-logo.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/python--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios/50/null/react-native--v1.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/sass.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/git.png"
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src="https://img.icons8.com/windows/50/null/sass--v1.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/c-plus-plus-logo.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/python.png"
          />
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/nodejs.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"/>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
