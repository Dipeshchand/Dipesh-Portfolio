// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/gym.png';
import csprepLogo from './assets/work_logo/wedding.png';
import movierecLogo from './assets/work_logo/wedding1.png';
import taskremLogo from './assets/work_logo/movie.png';
import npmLogo from './assets/work_logo/rentv.png';
import webverLogo from './assets/work_logo/floating.png';
// import cmLogo from './assets/work_logo/floating.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "addWeb.tech",
      date: "December 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Goapptiv",
      date: "September 2022 - August 2023",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Presidency University Bangalore",
      date: "Sept 2023 - July 2025",
      grade: "7 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from Presideny University, Bangalore. During my time at PUV, I gained a strong foundation in programming, software development, and computer science principles. Web Development, and Software Engineering, and actively participated in workshops and technical events that further sharpened my skills.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Siddhartha degree college, Hyderabad",
      date: "Sept 2020 - Aug 2023",
      grade: "70%",
      desc: "I completed my Bachelor's degree in Computer Application (BCA.) from Siddhartha degree college College, Hyderabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Application - BCA (Computer Application)",
    }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "BookMyFit ",
      description:
        "BookMyFit is a responsive web platform designed to streamline the fitness journey by allowing users to discover and book sessions at nearby gyms and fitness centers. Built with a user-friendly interface and dynamic backend, the platform connects health-conscious users with fitness providers in real-time..",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API","Tailwend css"],
      webapp: "https://bookmyfit-1.onrender.com/",
    },
    {
      id: 1,
      title: "Aestheticmoments wedding photography ",
      description:
        "Developed a responsive wedding photography portfolio website with modern UI/UX and a backend admin panel to upload and manage portfolio content dynamically. Focused on elegant design, smooth performance, and mobile responsiveness.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express",  "JavaScript"],
      github: "https://github.com/Dipeshchand/aestheticmomentsphotography-client",
      webapp: "https://www.aestheticmoments.in/",
    },
    {
      id: 2,
      title: "Vivid snaps wedding Photography ",
      description:
        "Developed a responsive wedding photography portfolio website with modern UI/UX and a backend admin panel to upload and manage portfolio",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Dipeshchand/vivid-photography-",
      webapp: "https://www.vividsnaps.in/home",
    },
    {
      id: 3,
      title: "Rent V - Backend ",
      description:
        "Developed the backend for Rent-V, a vehicle rental platform for university students. Built APIs for user authentication, vehicle listings, booking management, document verification, and secure data handling to support seamless rental operations.",
      image: npmLogo,
      tags: ["React JS", "Node.js",  "NPM", "Validation"],
      github: "https://github.com/Dipeshchand/RentV",
      webapp: "https://github.com/Dipeshchand/RentV",
    },
    {
      id: 4,
      title: "Movie Search Card",
      description:
        "Built a Movie Search Application that allows users to search for movies by name and instantly view movie details through API integration. Developed a responsive and user-friendly interface focused on fast search results and smooth user experience.",
      image: taskremLogo,
      tags: ["React","JavaScript", "API", "tailwindcss"],
      github: "https://github.com/Dipeshchand/Movie-Search",
      webapp: "https://movie-search-rust-two.vercel.app/",
    },
    {
      id: 5,
      title: "Floating Card",
      description:
        "Floating card is the appliactoin where we can drag from one box container.",
      image: webverLogo,
      tags: ["React", "tailwindcss", "JavaScript", "Framer Motion"],
      github: "https://github.com/Dipeshchand/Floating-Card",
      webapp: "https://floating-card-ten.vercel.app/",
    },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  