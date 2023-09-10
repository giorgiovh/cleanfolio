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
            <ImageVideo defaultImage={obj.img} video={obj.video} title={obj.name}/>
            <div className="projDetails">
              <p className="specText">
                <strong>Description</strong>
                <br />
                {obj.description}
              </p>
              <p className="techs specText">
                <strong>Technologies</strong>
                <br />
                {obj.stack}
              </p>

              <div className="projLinks">
                <a
                  href={obj.sourceCode}
                  alt="not valid"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Repo
                </a>
                {obj.livePreview ? (
                  <a
                    href={obj.livePreview}
                    alt="not valid"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live App
                  </a>
                ) : (
                  <p>Maintenance</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
