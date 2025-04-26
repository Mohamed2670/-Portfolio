import { Experience, Education, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    position: 'Software Engineer',
    company: 'Banyan Co',
    location: 'Cairo',
    startDate: 'Jan 2025',
    endDate: '',
    description: [
      'Developed and maintained medical solutions using .NET to assist pharmacies in optimizing their operations.',
      'Integrated backend services with frontend technologies like React and Tailwind to enhance performance and responsiveness.',
      'Worked closely with cross-functional teams to deliver feature-rich, high-quality software solutions.',
      'Demonstrated strong teamwork and communication skills by collaborating with peers in group activities and presentations.'
    ]
  },
  {
    id: '2',
    position: 'Software Engineer Intern',
    company: 'Taza Company',
    location: 'Cairo',
    startDate: 'Jul 2024',
    endDate: 'Nov 2024',
    description: [
      'Developed and maintained backend services using ASP.NET, Object-Relational Mapping (ORM), and TypeScript.',
      'Integrated backend services with frontend technologies like React and Tailwind to achieve high performance and responsiveness.',
      'Implemented responsive web designs using HTML, CSS, and React to enhance user experience across devices.',
      'Collaborated with cross-functional teams to deliver feature-rich and high-quality software solutions.'
    ]
  },
  {
    id: '3',
    position: 'Coding Instructor',
    company: 'ISchool',
    location: 'Cairo',
    startDate: 'Sep 2022',
    endDate: 'Dec 2022',
    description: [
      'Teaching +30 students of 6-18-year-old kids how to develop games from scratch using game engines like Mblock, Minecraft, and Godot.',
      'Gained deep knowledge about what they learned to transfer the ideas to them and use problem-solving challenges to enhance their thinking.',
      'Enhancing the communication skills with kids during sessions.'
    ]
  },
  {
    id: '4',
    position: 'Software Engineer Intern',
    company: 'Bld.ai',
    location: 'Cairo',
    startDate: 'Aug 2022',
    endDate: 'Oct 2022',
    description: [
      'Developed responsive and visually appealing web designs using React, ensuring seamless user experiences across various devices.',
      'Engineered optimized back-end services, delivering efficient and scalable solutions.',
      'Seamlessly integrated back-end services with front-end technologies using React, achieving high performance and responsiveness.'
    ]
  }
];


export const education: Education[] = [
  {
    id: '1',
    degree: ' Bachelor’s Degree in Computer Science',
    institution: 'Helwan University',
    location: 'Helwan, Cairo',
    startDate: '2021',
    endDate: '2024',
    description: ''},

];

export const skills: Skill[] = [
  { id: '1', name: 'React', category: 'frontend', level: 5 },
  { id: '2', name: 'TypeScript', category: 'frontend', level: 5 },
  { id: '3', name: 'JavaScript', category: 'frontend', level: 5 },
  { id: '4', name: 'HTML5/CSS3', category: 'frontend', level: 5 },
  { id: '5', name: '.NET', category: 'backend', level: 4 }, 
  { id: '6', name: 'Node.js', category: 'backend', level: 4 }, 
  { id: '7', name: 'Tailwind CSS', category: 'frontend', level: 4 },
  { id: '8', name: 'RESTful APIs', category: 'frontend', level: 3 }, 
  { id: '9', name: 'Express.js', category: 'backend', level: 4 },
  { id: '10', name: 'MongoDB', category: 'backend', level: 3 },
  { id: '11', name: 'PostgreSQL', category: 'backend', level: 3 },
  { id: '12', name: 'Git/GitHub', category: 'devops', level: 4 },
  { id: '13', name: 'CI/CD', category: 'devops', level: 3 },
  { id: '14', name: 'Docker', category: 'devops', level: 3 },
  { id: '15', name: 'AWS', category: 'devops', level: 3 },
  { id: '16', name: 'Agile/Scrum', category: 'other', level: 4 },
  { id: '17', name: 'UI/UX Design', category: 'other', level: 3 },
  { id: '18', name: 'Technical Writing', category: 'other', level: 4 }
];

export const resumePdfUrl = '/Mohamed_Hassan_Software__Engineer.pdf';