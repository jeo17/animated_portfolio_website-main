
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

 import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiRedux,
} from "react-icons/si";
// import { GrCode } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { GrMysql } from "react-icons/gr";




export const data = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/dlszo5c4l/image/upload/v1693160994/Rawdhati_ecuc5t.jpg',
    title: "Rawdhati platform + chat app",
    desc: "there is no demo for now ,Because the application is being modified ;)",
    link: "",
    git: "https://github.com/jeo17/Rawdhati",
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/dlszo5c4l/image/upload/v1693159599/Mui_social_media_design_tfqcjs.jpg',
    title: "Mui Social Media Design",
    desc: "",
    link: "https://mui-social-media.web.app/",
    git: "https://github.com/jeo17/Mui-social-media",
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/dlszo5c4l/image/upload/v1693089751/Green_and_White_Photographic_Blogger_Bio-Link_Website_jmqlc1.jpg',
    title: "Online Store",
    desc: "",
    link: "https://e-cemmerce-med.web.app/",
    git: "https://github.com/jeo17/online-shop",
  }
  
];







 export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  frontSoftwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: IoLogoHtml5 ,
      className : "html"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: IoLogoCss3 ,
      className : "css"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: SiJavascript,
      className : "js"
    },
    {
      skillName: "TailwindCss",
      fontAwesomeClassname: SiTailwindcss ,
      className : "tailwind"
    },
    {
      skillName: "ReactJs",
      fontAwesomeClassname: FaReact,
      className : "react"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: SiRedux ,
      className : "redux"
    },

  ],








  backSoftwareSkills: [

    {
      skillName: "NodeJs",
      fontAwesomeClassname: IoLogoNodejs,
      className : "node"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: SiMongodb ,
      className : "mongo"
    },
    {
      skillName: "Express",
      fontAwesomeClassname: SiExpress,
      className : "express"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: SiFirebase ,
      className : "firebase"
    },
    {
      skillName: "Mysql",
      fontAwesomeClassname: GrMysql ,
      className : "mysql"
    },


  ],
















  display: true // Set false to hide this section, defaults to true
};
