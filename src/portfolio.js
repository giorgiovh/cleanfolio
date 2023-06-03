const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: './',
  title: 'GVH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Giorgio von Horoch',
  role: 'Software Engineer',
  description:
    'Strong background in building user-centric web applications. Skilled in writing clean, efficient code to prioritize automation and improve user experience. Graduated Summa Cum Laude in Economics and self-motivated in learning new technologies. Bilingual in Spanish and English.',
  resume: 'https://docs.google.com/document/d/1H1zYl-ooiG01zMJjk6F19_1KkTOdRn22tofAKKFsNd0/edit#heading=h.fy8vh08uaw4e',
  social: {
    linkedin: 'https://www.linkedin.com/in/jorge-von-horoch/',
    github: 'https://github.com/giorgiovh',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Song Tag',
    description:
      "Multiplayer game where players take turns covering songs that start with specific letters. Don't forget to submit your song on time, or the other players will choose one for you!",
    stack: ['React', 'JavaScript', 'Material UI', 'Firebase'],
    sourceCode: 'https://github.com/giorgiovh/js-song-tag',
    livePreview: 'https://js-song-tag.web.app/',
  },
  {
    name: 'UFC Wiki',
    description:
      'Wiki that to keeps users updated on upcoming UFC events and fighter statistics.',
    stack: ['React', 'JavaScript', 'Material UI', 'Firebase', 'SportsDataIO API'],
    sourceCode: 'https://github.com/giorgiovh/ufc-wiki',
    livePreview: 'https://ufc-wiki-b409b.web.app/',
  },
  {
    name: 'Dough or No Dough',
    description:
      'Personal finance app that allows users to keep track of their spending.',
    stack: ['MongoDB', 'Express', 'React', 'NodeJS', 'JavaScript', 'Material UI', 'Firebase', 'Railway'],
    sourceCode: 'https://github.com/giorgiovh/dough-or-no-dough',
    livePreview: 'https://dough-or-no-dough.web.app/',
  },
  {
    name: 'Activism Events',
    description:
      "Site that fetches events from Facebook and allows users to create and favorite events. Visbility of events is based on user account type and event privacy settings.",
    stack: ['React', 'Javascript', 'Python', 'SQLAlchemy', 'FastAPI'],
    sourceCode: 'https://github.com/ActiveVegans/react-active-vegans-website',
    livePreview: 'https://activevegans.org/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Material UI',
  'Express',
  'Node.js',
  'MongoDB',
  'Bootstrap',
  'Axios',
  'Git',
  'PostgreSQL',
  'MySQL',
  'TypeScript',
  'Python',
  'Django',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jorgevonhoroch@gmail.com',
}

export { header, about, projects, skills, contact }
