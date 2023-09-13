import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
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
            <ImageVideo defaultImage={obj.img} video={obj.video} title={obj.name}/>
            <div className='project'>
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

{obj.sourceCode && (
      <a
        href={obj.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target='_blank' 
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>
    )}

    {obj.livePreview && (
      <a
        href={obj.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target='_blank' 
        rel="noreferrer"
      >
        <LaunchIcon />
      </a>
    )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
