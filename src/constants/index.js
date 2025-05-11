import {
  frontend,
  backend,
  ai,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  nestjs,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  php,
  pristone,
  posbang,
  laravel,
  wordpress,
  coinpass,
  sleek,
  karta,
  fixlers,
  covertech
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experiences',
    title: 'Experiences',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'AI Integrations',
    icon: ai,
  },
  {
    title: 'DevOps',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
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
    name: 'Nest JS',
    icon: nestjs,
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
    name: 'php',
    icon: php,
  },
  {
    name: 'laravel',
    icon: laravel,
  },
  {
    name: 'wordpress',
    icon: wordpress,
  },
];

const experiences = [
  {
    title: 'DevOps / Full Stack Developer',
    company_name: 'Pristone',
    icon: pristone,
    iconBg: '#333333',
    date: 'November 2016 to December 2018',
  },
  {
    title: 'DevOps / Senior Full Stack Developer',
    company_name: 'Posbang',
    icon: posbang,
    iconBg: '#333333',
    date: 'November 2018 to December 2019',
  },
  {
    title: 'DevOps / Web Developer',
    company_name: 'COINPASS',
    icon: coinpass,
    iconBg: '#333333',
    date: 'January 2020 to January 2021',
  },
  {
    title: 'Senior Full Stack Developer',
    company_name: 'Sleek',
    icon: sleek,
    iconBg: '#333333',
    date: 'January 2020 to January 2021',
  },
  {
    title: 'Senior Software Developer',
    company_name: 'Karta',
    icon: karta,
    iconBg: '#333333',
    date: 'April 2022 to February 2023',
  },
  {
    title: 'Senior Software Developer',
    company_name: 'Fixlers',
    icon: fixlers,
    iconBg: '#333333',
    date: 'May 2023 to November 2023',
  },
  {
    title: 'Senior Software Developer III',
    company_name: 'Cover Tech',
    icon: covertech,
    iconBg: '#333333',
    date: 'December 2023 to February 2025',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
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
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
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
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  }
];

export { services, technologies, experiences, projects };
