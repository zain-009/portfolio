import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  mysql,
  typescript,
  todo,
  html,
  mazebank,
  infenium,
  learnix,
  technest,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  laravel,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
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
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
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
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "mysql",
    icon: mysql,
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
];

const experiences = [
  {
    title: "Flutter Intern",
    company_name: "Bytewise",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Mar 2023 - Jun 2023",
  },
  {
    title: "UI Designer",
    company_name: "Freelance",
    icon: microverse,
    iconBg: "#333333",
    date: "Dec 2023 - Present",
  },
  {
    title: "Laravel Intern",
    company_name: "Bytewise",
    icon: kelhel,
    iconBg: "#333333",
    date: "Jun 2024 - Sep 2024",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Learnix",
    description:
      "A Learning Management System built with Laravel that allows the teacher to assign quizzes, assignments, etc to students.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: learnix,
    repo: "https://github.com/zain-009/Learnix",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7231678352800006145/",
  },
  {
    id: "project-2",
    name: "Infenium",
    description:
      "This is a agency website built using HTML, CSS and JavaScript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: infenium,
    repo: "#",
    demo: "https://www.infenium.com",
  },
  {
    id: "project-3",
    name: "Technest",
    description:
      "This is a online techstore website built using HTML and Bootstrap CSS",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: technest,
    repo: "https://github.com/zain-009/technest",
    demo: "https://technest-npegqqmy5-zain-alis-projects-42370ab0.vercel.app/",
  },
  {
    id: "project-4",
    name: "Maze Bank",
    description: `A CRUD Bank Management System built using MERN stack.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mazebank,
    repo: "https://github.com/zain-009/Maze-Bank",
    demo: "https://maze-bank-hjlcd23dg-zain-alis-projects-42370ab0.vercel.app/",
  },
  {
    id: "project-5",
    name: "ToDo",
    description: "This is a Todo Application Built using Laravel CRUD.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    repo: "https://github.com/zain-009/Todo-Laravel",
    demo: "#",
  },
];

export { services, technologies, experiences, projects };
