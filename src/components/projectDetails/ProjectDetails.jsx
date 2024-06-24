import React from 'react'
import './ProjectDetails.css'
import DefinedSearchBar from '../definedSearchBar/DefinedSearchBar'
import Reactions from '../reactions/Reactions'
import Comments from '../comments/Comments'
import CommentsProvider from '../../hooks/react/CommentsProvider'
import MoreDetails from '../moreDetails/MoreDetails'

const ProjectDetails = ({ project }) => {
  return (
    <CommentsProvider>
      <div className='project-details'>
        <h2>{project.nombreCampaña}</h2>
        <div className='image-project-ontainer'>
          <img src={project.img} alt={project.nombreCampaña} />
        </div>
        <p>{project.resumenProyecto}</p>
        <MoreDetails presencial={project.presencial} online={project.online} />
        <DefinedSearchBar value={project.nombreCampaña} />
        <Reactions />
        <Comments />
      </div>
    </CommentsProvider>
  )
}

export default ProjectDetails
