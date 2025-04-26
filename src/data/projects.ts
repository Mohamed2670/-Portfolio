import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'PC Builder',
    description: 'A web application that allows users to build custom PCs by selecting components and checking compatibility.',
    image: 'https://pcbros.tech/cdn/shop/files/DSC02157.jpg?v=1711649579&width=2048',
    tags: ['React', '.NET', 'Postgres', 'Python','BuitifulSoup','tailwindcss'],
    demoUrl: '#',
    githubUrl: 'https://github.com/Mohamed2670/PC-Store',
    featured: true
  },
  {
    id: '2',
    title: 'Taza Menus Platform API ',
    description: 'A Saas platform for restaurants to manage their menus, orders, and customer interactions in real-time.',
    image: 'https://cdn.wbtourisme.be/sites/default/files/55941.jpg',
    tags:['.NET', 'Postgres','EF-core'],
    demoUrl: '#',
    githubUrl: 'https://github.com/taza-app/menus-backend',
    featured: true
  },
  {
    id: '3',
    title: 'Video Downloader',
    description: 'A web application that allows users to download videos or audios from various platforms by pasting the video URL.',
    image: 'https://www.lifewire.com/thmb/uyc9JVfcbh2BgOTZkALYwdMAR6s=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-501509053-57d2f6cf3df78c583344a051.jpg',
    tags: ['.NET', 'Python'],
    demoUrl: '#',
    githubUrl: 'https://github.com/Mohamed2670/Youtube-Downloader',
    featured: true
  },
  {
    id: '4',
    title: 'Sheets Saver',
    description: 'A web application Helping users to save their Google Sheets data in to DB in optmized way using multithreading.',
    image: 'https://www.ropstam.com/wp-content/uploads/2023/06/sql-vs-noSQL-blog-main-pic-ropstam-solutions.webp',
    tags: ['.NET', 'Postgress', 'Blazor', 'Multithreading','EF-core'],
    demoUrl: '#',
    githubUrl: 'https://github.com/Mohamed2670/ImportDatafromExcell',
    featured: true
  },
  {
    id: '5',
    title: 'Games Store',
    description: 'An online store for Downlaoding video games.',
    image: 'https://t4.ftcdn.net/jpg/05/71/61/23/360_F_571612370_4upzVkV8yBVWjE3b7ydhAQIPcAyYsaz6.jpg',
    tags: ['React', 'TypeScript', 'tailwindcss'],
    demoUrl: '#',
    githubUrl: 'https://github.com/Mohamed2670/Taza-GameStore',
    featured: false
  },
  // {
  //   id: '6',
  //   title: 'Portfolio Website',
  //   description: 'A professional portfolio website built with React and Tailwind CSS to showcase projects and skills.',
  //   image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   tags: ['React', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
  //   demoUrl: 'https://portfolio.example.com',
  //   githubUrl: 'https://github.com/yourusername/portfolio',
  //   featured: false
  // }
];