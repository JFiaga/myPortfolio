import { jhire, samaritanAI } from "../assets";

export const projectArr = [
  // {
  //   projectName: "MyBubble",
  //   details:
  //     `

    

  //     MyBubble is by far my most ambitious project, because of all the features I've been able to implement on this site (community creation, the ability to restrict posts, the ability to ban a user from a community, etc.). It took a lot of concentration and patience to build, but the end result was well worth it.
      
  //     This project greatly helped me to improve my knowledge of the next js framework, as I had to deal with certain difficulties I'd never seen before, particularly when it came to setting up tests, and now it's much easier for me to do that.
      
  //     `,

  //   technologies: ["Next", "Typescript","MongoDB", "React-Hook-Form", "Cypress", "Jest", "React-Testing-Library", "Tailwind"],
  //   codeLink: "#",
  //   demoLink: "#",
  //   img: hoobank,
  //   reverse: false,
  // },
  {
    projectName: "Samaritan AI",
    details:
    
    `
    
    SamaritanAI is a PaaS that allows you to generate images, videos, sound, code and text according to your needs, with a beautiful and intuitive interface

    Samaritan is the project I most enjoyed working on, as I'm a big fan of artificial intelligence. Its realization was relatively simple, thanks to the experience of my previous projects. However, I learned a few new tricks in its design, notably the Prisma ORM, which I find very efficient and easy to use, and the integration of stripe to give privileges to a user depending on whether he pays or not.`,

    technologies: [
      "Next",
      "Typescript",
      "Prisma",
      "React-Hook-Form",
      // "Cypress",
      // "React-Testing-Librairy",
      // "Jest",
      "Tailwind",
    ],
    codeLink: "https://github.com/JFiaga/samaritanAI",
    demoLink: "https://samaritanai.vercel.app/",
    img: samaritanAI,
    reverse: true,
  },
  {
    projectName: "Jhire",
    details:
    `Jhire is a project I created to consolidate my knowledge of the Express.js framework with TypeScript. This project is a site where you can register as a developer or recruiter. Developers can optimize their profile in various ways, while recruiters can chat directly with developers via instant messaging.

    With this project, I made a number of discoveries and finally understood why TypeScript is so popular with developers. Indeed, although at first sight it may seem difficult to get to grips with, it nevertheless enables enormous scalability of the code and, among other things, allows far fewer errors to be made than on an application made with JavaScript, which saves an enormous amount of time and resources. Since then, it's been unthinkable for me to code a project without using typescript.`,
    technologies: ["React", "Typescript","Express","Mongo DB", "React Query", "Websocket","socket.io", "React Hook Form",  "Tailwind"],
    codeLink: "https://github.com/JFiaga/MERN_hiringWebsite",
    demoLink: "https://jhire.vercel.app/",
    img: jhire,
    reverse: false,
  },
  // {
  //   projectName: "LittleDev",
  //   details:
  //   `LittleDev is a blog I created to share my ideas and give tips mainly aimed at juniors and anyone wanting to get started in the world of computer development.

  //   I've had to train people in a local learning center and I've realized that many people have a lot of preconceived ideas about the world of development before they've even written their first line of code. Many others are totally out of touch, and mistakenly think that you can be a developer in a month, or that algorithms aren't important, etc. On this blog, I try to break down the myths and give real tips to help all those who want to get started to become good developers.`,
  //   technologies: ["Next", "Typescript","Express","Mongo DB", "cypress", "React-Testing-Librairy", "Jest", "Tailwind"],
  //   codeLink: "#",
  //   demoLink: "#",
  //   img: hoobank,
  //   reverse: true,
  // },

];


// For this project, I used Next js, Typescript, MongoDB, Tailwind, React Hook Form, and of course Jest, Cypress and React Testing librairy for the various tests.