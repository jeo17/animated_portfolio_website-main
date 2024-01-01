
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

 import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiRedux,
  SiTypescript,
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
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/dlszo5c4l/image/upload/v1700163647/Green_and_White_Photographic_Blogger_Bio-Link_Website_xhuk84.jpg',
    title: "DevFest Event 2023 Medea",
    desc: "",
    link: "https://devfest23medea.vercel.app/?fbclid=IwAR0b-c2RyVVTF_IqxmU0p4W_hOryqxEN5WJo1Mk5TL5ajMvO9kCKFI9xOs8",
    git: "https://github.com/saidseghirakram/finale_devfest_website",
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/dlszo5c4l/image/upload/v1704142283/Green_and_White_Photographic_Blogger_Bio-Link_Website_o17w8b.png',
    title: "Modern Portfolio ",
    desc: "didn't host it yet ^_^",
    link: "",
    git: "https://github.com/jeo17/Haithem-portfolio",
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
    {
      skillName: "TypeScript",
      fontAwesomeClassname: SiTypescript ,
      className : "typescript"
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
