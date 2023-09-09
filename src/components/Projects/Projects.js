import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import ImageVideo from './ImageVideo'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      {/* <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div> */}

      <div className="projFlex">
        {projects.map((obj) => (
          <div className="projCard" key={uniqid()}>
            {/* CONTINUE HERE: Pass the video property to the ImageVideo component below. Also, add video properties and videos to the projects on portfolio.js */}
            <ImageVideo defaultImage={obj.img} video={obj.video}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
