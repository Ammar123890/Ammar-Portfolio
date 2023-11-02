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
  bazar,
  food,
  hotel,
  quiz,
  silk,
  project,
  teacher,
  stack,
  research,
  desktop,
  createex,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full Stack Developer',
    icon: frontend,
  },
  {
    title: 'Desktop App Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Designer',
    icon: ux,
  },
  {
    title: 'Prototyping',
    icon: prototyping,
  },
];

const technologies = [

  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Java',
    icon: java,     
  },

];

const experiences = [
  {
    title: 'Backend Developer',
    company_name: 'CREATEEX',
    icon: createex,
    iconBg: '#333333',
    date: 'Sep 2023 - Present',
    details: 'Backend developer for NodeJs and Express, also for the cloud deployment and database optimization and integeration between different layers'
  },
  {
    title: 'Teacher Assistant',
    company_name: 'FAST NUCES',
    icon: teacher,
    iconBg: '#333333',
    date: 'Sep 2022 - Jan 2023',
    details: 'Assisted students in resolving problems related to code that did not follow Software Engineering practices Designed and graded assignments to evaluate studentsunderstanding of the course material',
  }, 
  {
    title: 'Desktop App Dev Intern',
    company_name: 'QUEST',
    icon: desktop,
    iconBg: '#333333',
    date: 'Jun 2022- Aug 2022',
    details: 'Designed and developed a generic SQL parser in Java to standardize the syntax and format of database design queries sent to another software at Quest Lab',
  },
  {
    title: 'Research Assistant',
    company_name: 'AIM Research Lab',
    icon: research,
    iconBg: '#333333',
    date: 'Jan 2022- Mar 2022',
    details: 'Collaborated with Professor to develop Object Constraint Language(OCL) for Business Process Modeling Notation (BPMN) to facilitate business process engineering',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'FIVERR and UPWORK',
    icon: stack,
    iconBg: '#333333',
    date: 'JAN 2022 - Present',
    details: 'As a freelancer in full-stack development, I provided end-to-end solutions for clients, leveraging my expertise in both front-end and back-end technologies to deliver high-quality, custom web applications tailored to their specific needs.',
  },
];


const projects = [
  {
    id: 'project-1',
    name: 'Hotel Hub',
    description: 'Hotel Hub is a hotel booking app that allows users to book hotels and manage their bookings. Also allows hotel owners to manage their hotels and bookings.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: hotel,
    repo: 'https://github.com/Ammar123890/Mern-Stack-HotelHub',
  },
  {
    id: 'project-2',
    name: 'Bazar.pk',
    description:
      'Bazar.pk is an e-commerce app that allows users to buy and sell products. It also allows users to manage their products and orders.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: bazar,
    repo: 'https://github.com/Ammar123890/MERN-E-COMMERCE_Bazar.pk',
  },
  {
    id: 'project-3',
    name: 'Food on Wheels',
    description: 'Food on Wheels is a food delivery app that allows users to order food and manage their orders. Also allows restaurant owners to manage their restaurants and orders.',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swing',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: food,
    repo: 'https://github.com/Ammar123890/JAVA-SWING-FILE-HANDLING-OOP-Food-delivery-system',
  },
  {
    id: 'project-4',
    name: 'Silk Logs',
    description: `A invertory and sales management system for a silk logs company.`,
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'Javafx',
        color: 'green-text-gradient',
      },
      {
        name: 'sql',
        color: 'pink-text-gradient',
      },
    ],
    image: silk,
    repo: 'https://github.com/Ammar123890/JAVAFX-MYSQL-SDA-Inventory-and-sales-management',
  },
  {
    id: 'project-5',
    name: 'All other projects',
    description:
      'All other projects are available on my github profile.',
    tags: [
      {
        name: 'github',
        color: 'blue-text-gradient',
      },
      {
        name: 'github',
        color: 'green-text-gradient',
      },
    ],
    image: project, 
    repo: 'https://github.com/Ammar123890',

  }
];

export { services, technologies, experiences, projects };
