import {
  frontend,
  java,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  graphql,
  bayut,
  circle,
  comnow,
  tossdown,
  pushHealth,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Development",
    icon: frontend,
  },
  {
    title: "Frontend Development",
    icon: backend,
  },
  {
    title: "Cloud Engineering",
    icon: ux,
  },
  {
    title: "DevOps",
    icon: prototyping,
  },
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Dubizzle Labs",
    icon: "https://images.seeklogo.com/logo-png/34/1/dubizzle-logo-png_seeklogo-346555.png",
    iconBg: "#333333",
    date: "June 2024 - Present",
    details: {
      overview:
        "As a Senior Software Engineer at Dubizzle Labs, I'm instrumental in developing and maintaining Bayut.com, a leading real estate platform in the UAE and KSA. My work encompasses full-stack development, significant performance improvements (40% speed optimization, 50% build time reduction), API optimization (converting 300+ GraphQL queries to 24 REST APIs), and enhancing security with Cloudflare Zero Trust. My contributions have directly supported content-driven strategies that drive 90% of Bayut's traffic.",
      responsibilities: [
        "Developed and optimized RESTful and GraphQL APIs to improve data retrieval efficiency.",
        "Refactored and maintained Strapi-based CMS for better scalability and performance.",
        "Ensured database schema consistency and optimized queries for faster response times.",
        "Resolved deployment and infrastructure challenges to enhance system stability.",
        "Collaborated with cross-functional teams to improve platform functionality and maintainability.",
        "Contributed to bug fixing, debugging, and feature enhancements to improve user experience.",
      ],
      links: [
        { name: "Dubizzle Labs", url: "https://dubizzlelabs.com/" },
        { name: "Bayut.com", url: "https://www.bayut.com/" },
      ],
    },
  },
  {
    title: "Software Engineer",
    company_name: "Tossdown",
    icon: "https://www.softwareadvice.com/_next/image/?url=https%3A%2F%2Fgdm-catalog-fmapi-prod.imgix.net%2FProductLogo%2F03b59d15-f64a-4f8e-ac03-b79ef4502871.png&w=256&q=75",
    iconBg: "#333333",
    date: "Mar 2023 - Sep 2024",
    details: {
      overview:
        "As a Software Engineer at Tossdown, I played a key role in transforming the platform’s monolithic architecture into a scalable microservices-based system to improve flexibility, performance, and maintainability. My contributions focused on enhancing system efficiency, optimizing backend processes, and ensuring seamless operations for brands like Galito’s Canada and Jalal Sons.",
      responsibilities: [
        "Led the transition from a monolithic architecture to a modular, microservices-driven system to improve scalability.",
        "Designed and optimized backend services to enhance performance and reliability.",
        "Implemented solutions for real-time table booking, POS systems, and franchise management.",
        "Integrated automated workflows and cloud-based solutions to improve operational efficiency.",
        "Optimized data retrieval and storage mechanisms to enhance search and processing speed.",
        "Ensured high availability, security, and scalability across platform operations.",
        "Collaborated with cross-functional teams to refine business processes and system functionality.",
      ],
      links: [
        { name: "Tossdown", url: "https://tossdown.com/" },
        { name: "Galito's Canada", url: "https://galitoschicken.com/" },
        { name: "Howdy", url: "https://howdy.pk/" },
        { name: "Jalal Sons", url: "https://jalalsons.com.pk/" },
      ],
    },
  },
  {
    title: "Backend Engineer",
    company_name: "Createex",
    icon: "https://media.licdn.com/dms/image/v2/D4D0BAQEASgXqvdWukw/company-logo_200_200/company-logo_200_200/0/1687288808525/createex_logo?e=2147483647&v=beta&t=hW_FcjVuaysiCtDlizNJsqFmvUhdTGp09igk4fx5jq0",
    iconBg: "#333333",
    date: "Sep 2022 - Aug 2024",
    details: {
      overview:
        "As a Backend Engineer at Createex, I worked on multiple projects, overseeing them from inception to deployment and ongoing maintenance. My contributions focused on architecting and optimizing backend systems, ensuring seamless integration with front-end applications, and improving performance for high-traffic platforms. Some of the key projects I contributed to include Circle App, Push Health, Beaconhouse System LMS, Complete University Management and many others.",
      responsibilities: [
        "Designed and developed scalable backend services to support complex business requirements.",
        "Ensured smooth integration between backend systems and front-end applications for an enhanced user experience.",
        "Optimized system performance and API efficiency to handle high-traffic scenarios.",
        "Contributed to end-to-end project development, from initial architecture design to deployment and maintenance.",
        "Implemented robust data management and processing solutions to enhance system reliability.",
        "Worked closely with cross-functional teams to align technical implementations with business objectives.",
      ],
      links: [
        { name: "Createex", url: "https://createex.tech/" },
        { name: "Push Health", url: "https://www.pushhealth.com" },
        { name: "Circle App", url: "https://circle.so/" },
        {
          name: "Comnow",
          url: "https://apps.apple.com/ae/app/comnow/id1614790733",
        },
      ],
    },
  },
  {
    title: "Teaching Assistant",
    company_name: "National University of Computer and Emerging Sciences",
    icon: "https://styles.redditmedia.com/t5_2gaque/styles/image_widget_kpmu2n4nx2j41.png", // Replace with your icon path
    iconBg: "#333333",
    date: "Sep 2022 - Jan 2023",
    details: {
      overview:
        "As a Teaching Assistant at FAST NUCES, I supported students in understanding core software engineering principles and improving their coding practices. My role involved guiding students through problem-solving, evaluating their coursework, and ensuring adherence to industry standards in software development.",
      responsibilities: [
        "Assisted students in debugging and refining their code to align with software engineering best practices.",
        "Designed and graded assignments and assessments to evaluate students’ understanding of course material.",
        "Provided one-on-one and group mentorship, helping students grasp complex concepts.",
        "Facilitated technical discussions and workshops to enhance practical learning.",
        "Collaborated with faculty to improve course structure and assignment clarity.",
      ],
      links: [],
      projectDetails: [],
    },
  },
  {
    title: "Software Engineering Intern",
    company_name: "Quest Lab",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBLslY4NUB4oQE4JQovh2ckwCD8QJoiRWhCw&s", // Replace with your icon path
    iconBg: "#333333",
    date: "Apr 2022 - Jul 2022",
    details: {
      overview:
        "As a Software Engineering Intern at Quest Lab, I gained hands-on experience in quality engineering, automated testing, and business process engineering for reliable and scalable software systems. The internship provided insights into novel strategies and tools used in industrial-quality assurance and software reliability.",
      responsibilities: [
        "Learned and applied scalable quality engineering and automated testing techniques in real-world scenarios.",
        "Developed a Java-based system that fetched and processed business processes from database schemas.",
        "Gained an in-depth understanding of business process engineering and its role in software development.",
        "Explored strategies for building reliable and dependable software systems in an industrial context.",
        "Collaborated with senior engineers to analyze software reliability challenges and potential solutions.",
      ],
      links: [],
      projectDetails: [],
    },
  },
];

const projects = [
  {
    id: "project-1",
    name: "Bayut",
    description: "A leading real estate platform in the UAE and KSA",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bayut,
    repo: "https://www.bayut.com/",
  },
  {
    id: "project-2",
    name: "Circle",
    description:
      "A dynamic social networking platform enabling user-centric groups for seamless communication, similar to WhatsApp and Discord.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: circle,
    repo: "https://circle.so/",
  },
  {
    id: "project-3",
    name: "Push Health",
    description: `A robust telehealth platform with appointment scheduling, pharmacy referrals, and
seamless health communication. Improved UI, patient engagement, and accessibility, with
partnerships like Quest Diagnostics.`,
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Swing",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pushHealth,
    repo: "https://www.pushhealth.com",
  },
  {
    id: "project-4",
    name: "Comnow",
    description: `An internal communication platform for doctors, optimizing team connectivity and
workflow efficiency. Features secure messaging, file sharing, and task management to streamline
inter-departmental communication`,
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Javafx",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: comnow,
    repo: "https://apps.apple.com/ae/app/comnow/id1614790733",
  },
  {
    id: "project-5",
    name: "Tossdown",
    description: `A scalable e-commerce and POS platform empowering businesses to launch
customizable online stores. It supports 350+ restaurants in Pakistan and 500+ in Canada,
including top brands like Galito’s Canada, Jalal Sons, and Howdy.`,
    tags: [
      {
        name: "github",
        color: "blue-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
    ],
    image: tossdown,
    repo: "https://tossdown.com/",
  },
];

export { services, technologies, experiences, projects };
