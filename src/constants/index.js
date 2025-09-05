import sih from '../assets/sih.png'
import osdc from '../assets/osdc.jpeg'

import meta from '../assets/meta.png'
import css from '../assets/tech/css.png'
import aspire from '../assets/Aspire3.jpg'
import html from '../assets/tech/html.png'
import git from '../assets/tech/git.png'
import javascript from '../assets/tech/javascript.png'
import mongodb from '../assets/tech/mongodb.png'
import mongoose from '../assets/tech/mongoose.png'
import mern from '../assets/tech/mern.png'
import nodejs from '../assets/tech/nodejs.png'
import reactjs from '../assets/tech/reactjs.png'
import redux from '../assets/tech/redux.png'
import msW from '../assets/tech/msW.jpg'
import threejs from '../assets/tech/threejs.svg'
import typescript from '../assets/tech/typescript.png'
import IMG1 from '../assets/portfolio1.png'
import IMG2 from '../assets/portfolio2.png'
import IMG3 from '../assets/portfolio3.png'
import IMG4 from '../assets/portfolio4.png'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.png'
import IMG7 from '../assets/portfolio7.png'
import AVTR1 from '../assets/suyash.jpeg'
import AVTR2 from '../assets/shantanu.jpeg'
import AVTR3 from '../assets/nikhil.jpeg'
import AVTR4 from '../assets/rachit.jpeg'

const feedbacks = [
  {
    img: AVTR2,
    name: 'Shantanu Kumar',
    review: " Incredible web mastery! My friend's website showcases a perfect blend of skill and aesthetics, offering a stunning digital experience that's both impressive and user-friendly.",
  },
  {
    img: AVTR1,
    name: 'Suyash Rai',
    review: "I was a team member with him in a hackathon where as a team leader he handelled team very effectively and his skills in web designery was excellent and a good personality to work with.",
  },

  {
    img: AVTR3,
    name: 'Nikhil Gupta',
    review: "A good team leader to work under, Atishay always ready to take challenges and do innovative things in the project and over all a good experience to work with him.",
  },
  {
    img: AVTR4,
    name: 'Rachit Jain',
    review: "Atishay excelled in technical skills, problem-solving, and teamwork, contributing greatly to our hackathon success. An invaluable team member!",
  },

]
const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "OSDC'HACK JIIT-62",
    icon: osdc,
    iconBg: "#E6DEDD",
    date: "April 2023 - April 2023",
    points: [
      "Developed and maintained our web application BloodMitr for the blood donors and blood requirers.",
      "Lead the team in that hackathon and worked with my team members to ensure user compatible website.",
      "Selected in top 10 teams where 90+ team participated and continued to developed our website",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Main Flow Services And Technologies",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2024 - August 2024",
    points: [
      "Recently completed this internship with all taks completed on time to better skills.",
      "Worked with great mentors to take my skills on the next level and to use them efficiently in the future.",
      "Created few projects using web technologies like ReactJs and NodeJs."
    ],
  },
  {
    title: "Software Engineer in Test Intern",
    company_name: "Aspire Fte Pvt Ltd.",
    icon: aspire,
    iconBg: "#dde0e6",
    date: "January 2025 - July 2025",
    points: [
      "Automated end-to-end test cases for core financial workflows, ensuring smooth and bug-free feature releases.",
      "Collaborated with mentors and team members to strengthen testing practices and enhance problem-solving skills.",
      "Contributed to development and automation tasks using technologies like Java, Php, Selenium, Typescript and Laravel."
    ],
  },
  {
    title: "Software Engineer in Test 1",
    company_name: "Aspire Fte Pvt Ltd.",
    icon: aspire,
    iconBg: "#dde0e6",
    date: "July 2025 - Present",
    points: [
      "Designing and maintaining robust automation frameworks, improving test coverage and accelerating release cycles for financial workflows.",
      "Leading 100% sprint automation and development initiatives across teams and implementing scalable solutions for efficiency.",
      "Developing revamp features for the financial workflows 😉."
    ],
  }
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Mern Stack",
    icon: mern,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mongoose",
    icon: mongoose,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "msWord",
    icon: msW,
  },
];
const projects = [
  {
    title: "BloodMitr",
    image: IMG1,
    git: "https://github.com/Atishay-25j/hackathon-project",
    demo: "https://bloodmitr.onrender.com"
  },
  {
    title: "Keeper App",
    image: IMG2,
    git: "https://github.com/Atishay-25j/keeper-App",
    demo: "https://keeper-app-aj.netlify.app/"
  },
  {
    title: "iNotebook",
    image: IMG3,
    git: "https://github.com/Atishay-25j/iNotebook-frontend",
    demo: "https://i-notebook-frontend-kappa.vercel.app"
  },
  {
    title: "TextTutils",
    image: IMG4,
    git: "https://github.com/Atishay-25j/textutils",
    demo: "https://atishay-25j.github.io/textutils/"
  },
  {
    title: "ToDOList",
    image: IMG5,
    git: "https://github.com/Atishay-25j/todolist-v1",
    demo: "https://todolist-yp9d.onrender.com"
  },
  {
    title: "Drum Kit",
    image: IMG6,
    git: "https://github.com/Atishay-25j/Drum-Kit-Starting-Files",
    demo: "https://atishay-25j.github.io/Drum-Kit-Starting-Files/"
  },
  {
    title: "Simon Game",
    image: IMG7,
    git: "https://github.com/Atishay-25j/Simon-Game-Challenge-Starting-Files",
    demo: "https://atishay-25j.github.io/Simon-Game-Challenge-Starting-Files/"
  },

]
export { experiences, technologies, projects, feedbacks }