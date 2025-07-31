// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

 import nodejsLogo from './assets/tech_logo/nodejs.png';
 import expressjsLogo from './assets/tech_logo/express.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Education Section Logo's
import sbsLOGO from './assets/education_logo/sbs.png';
import RpsdLogo from './assets/education_logo/Rpsd.gif';
import CgcLogo from './assets/education_logo/Cgc.jpeg';


import Library_Illustration_1 from './assets/Library_Illustration_1.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
       { name: 'JavaScript', logo: javascriptLogo },
       { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      // { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
       { name: 'Node JS', logo: nodejsLogo },
       { name: 'Express JS', logo: expressjsLogo },
      // { name: 'MySQL', logo: mysqlLogo },
      // /{ name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      // { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

//Cerifiaction Section Logo's
import CourseraLogo from './assets/Certificate_logo/Coursera.png';
import InfosysLogo from './assets/Certificate_logo/Infosys.png';
import FullimageLogo from'./assets/Certificate_logo/Fullimage.png';
import CourseraFullLogo from './assets/Certificate_logo/CourseraFull.png';

export const Certifications=[
{
  id: 1,
  title: "Full-Stack Web Development",
  issuer: "Coursera (Meta)",
  date: "June 2024",
  desc: "Covered React, MongoDB, RESTful APIs, and project deployment.",
  img: CourseraLogo,
  modalImage:CourseraFullLogo,
  skills: ["HTML", "CSS", "JavaScript","React"],
  website: "https://www.coursera.org/account/accomplishments/verify/FTKOWVPGEZZW ",
},
{
  id: 2,
  title: "oops in C++",
  issuer: "Infosys Springboard",
  date: "August 2024",
  desc: "Covered OOPS concept in c++",
  img: InfosysLogo,
  modalImage: FullimageLogo,
  skills: ["C++"],
  website: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate ",
},
];
  
  export const education = [
   
    {
      id: 1,
      img: CgcLogo,
      school: "Chandigarh Group of Colleges, Landran",
      date: "Aug 2022 - Present",
      grade: "7 CGPA",
      desc: "Currently I am Pursing my Bachelor's degree in Computer Science (B.Tech) from Chandigarh Group Of Collages,Landran. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development , I gained practical insights into the world of software development. My time at CGC College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Computer Science)",
    },
    {
      id: 2,
      img: RpsdLogo,
      school: "Dr R.P.S.D Senior Secondary School, Barnala ",
      date: "Apr 2021 - March 2022",
      grade: "78%",
      desc: "I completed my class 12 education from Dr R.P.S.D Senior Secondary School, Barnala, under the PSEB board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "PSEB(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: sbsLOGO,
      school: "Saheed Bhagat Singh Public School,Barnala",
      date: "Apr 2019 - March 2020",
      grade: "87.8%",
      desc: "I completed my class 10 education from Saheed Bhagat Singh Public School, Barnala, under the PSEB board.",
      degree: "PSEB(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Online Book Store",
      description:
        "A powerful and user-friendly MERN STACK web-application designed for book lovers to sell or buy book online anytime or anywhere",
      image: Library_Illustration_1,
      tags: ["HTML", "CSS", "JavaScript", "Mern Stack", "React"],
      github: "https://github.com/ritikkumar50/Web-Bookstore-",
      webapp: "https://bookztron-dev-branch.netlify.app/",
    },
      ];  
