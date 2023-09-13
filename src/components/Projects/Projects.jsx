import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import ImageVideo from './ImageVideo'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section className="projects__grid">
      <h2 className="projTitle">Projects</h2>

      {/* <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div> */}

      <div className="projects__grid">
        {projects.map((obj) => (
          <div className="projCard" key={uniqid()}>
            <ImageVideo defaultImage={obj.img} video={obj.video} title={obj.name} />
            <div>
              <p className='project__description'>{obj.description}</p>
              {obj.stack && (
                <ul className='project__stack'>
                  {obj.stack.map((item) => (
                    <li key={uniqid()} className='project__stack-item'>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

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
