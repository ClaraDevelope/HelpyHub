import React from 'react'
import './ProjectDetails.css'
import DefinedSearchBar from '../definedSearchBar/DefinedSearchBar'
import Reactions from '../reactions/Reactions'
import Comments from '../comments/Comments'
import CommentsProvider from '../../hooks/react/CommentsProvider'

const ProjectDetails = ({ project }) => {
  return (
    <CommentsProvider>
      <div className='project-details'>
        <h2>{project.nombreCampaña}</h2>
        <div className='image-project-ontainer'>
          <img src={project.img} alt={project.nombreCampaña} />
        </div>
        <p>{project.resumenProyecto}</p>
        <DefinedSearchBar value={project.nombreCampaña} />
        <Reactions />
        <Comments />
      </div>
    </CommentsProvider>
  )
}

export default ProjectDetails
