// Song Tag
import songTagPic from './images/song_tag_pic.png'
import songTagVid from './videos/song_tag_vid.mp4'

// UFC Wiki
import ufcWikiPic from './images/ufc_wiki_pic.png'
import ufcWikiVid from './videos/ufc_wiki_vid.mp4'

// Dough Or No Dough
import doughOrNoDoughPic from './images/dough_or_no_dough_pic.png'
import doughOrNoDoughVid from './videos/dough_or_no_dough_vid.mp4'

// Active Vegans
import activeVegansPic from './images/active_vegans_pic.png'
import activeVegansVid from './videos/active_vegans_vid.mp4'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: './',
  title: 'GVH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Giorgio von Horoch',
  role: 'Software Engineer',
  description: 'Crafting innovative and user-centric web applications is my forte, backed by two years of professional web development experience. With a Summa Cum Laude distinction in Economics and a robust finance background, I bring a unique blend of analytical thinking and technical expertise in coding. My track record includes consistently surpassing performance goals, a testament to my dedication and proficiency. My journey from Paraguay to the US and subsequent career pivot have honed adaptability and rapid skill acquisition. Fluent in both Spanish and English.',
  resume: 'https://docs.google.com/document/d/1Lyk45obC-vkKzUexZlCVImt25RyiqILxqQo4adGEHrE/edit',
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
    description: "Multiplayer game where players take turns covering songs that start with specific letters. Don't forget to submit your song on time, or the other players will choose one for you!",
    stack: ['React', 'JavaScript', 'Material UI', 'Firebase', 'Spotify API'],
    sourceCode: 'https://github.com/giorgiovh/js-song-tag',
    livePreview: 'https://js-song-tag.web.app/',
    img: songTagPic,
    video: songTagVid
  },
  {
    name: 'UFC Wiki',
    description: 'UFC app offering insights into upcoming events and fighter profiles. Engage with friends through match predictions. The go-to tool for staying updated in the UFC world.',
    stack: ['React', 'Redux', 'JavaScript', 'Material UI', 'Firebase', 'SportsDataIO API'],
    sourceCode: 'https://github.com/giorgiovh/ufc-wiki',
    livePreview: 'https://ufc-wiki-b409b.web.app/',
    img: ufcWikiPic,
    video: ufcWikiVid
  },
  {
    name: 'Dough or No Dough',
    description: 'Expense tracker app allowing users to manage transactions with ease. Add, edit, or delete expenses seamlessly. A streamlined tool for personal finance oversight.',
    stack: ['MongoDB', 'Express', 'React', 'NodeJS', 'JavaScript', 'Material UI', 'Firebase', 'Railway'],
    sourceCode: 'https://github.com/giorgiovh/dough-or-no-dough',
    livePreview: 'https://dough-or-no-dough.web.app/',
    img: doughOrNoDoughPic,
    video: doughOrNoDoughVid
  },
  {
    name: 'Activism Events',
    description: "Site that fetches events from Facebook and allows users to create and favorite events. Visbility of events is based on user account type and event privacy settings.",
    stack: ['React', 'Javascript', 'Python', 'SQLAlchemy', 'FastAPI'],
    sourceCode: 'https://github.com/ActiveVegans/react-active-vegans-website',
    livePreview: 'https://activevegans.org/',
    img: activeVegansPic,
    video: activeVegansVid
  },
]

const skills = [
  // Front-end skills
  'React',
  'Redux',
  'Context API',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Material UI',
  'Bootstrap',

  // Back-end skills
  'Node.js',
  'Express',
  'Python',
  'Django',

  // Data management and APIs
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Firebase',
  'Mongoose',
  'JSON Web Token',
  'Axios',
  'Google OAuth',

  // Deployment and Version Control
  'Git',
  'GitHub',
  'Heroku',
  'Railway',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jorgevonhoroch@gmail.com',
}

export {
  header,
  about,
  projects,
  skills,
  contact
}