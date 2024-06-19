import React from 'react'
import './ProjectDetails.css'
import DefinedSearchBar from '../definedSearchBar/DefinedSearchBar'
import Reactions from '../reactions/Reactions'

const ProjectDetails = ({ project }) => {
  return (
    <div className='project-details'>
      <h2>{project.nombreCampaña}</h2>
      <div className='image-project-ontainer'>
        <img src={project.img} alt={project.nombreCampaña} />
      </div>
      <p>{project.resumenProyecto}</p>
      <DefinedSearchBar value={project.nombreCampaña} />
      <Reactions />
    </div>
  )
}

export default ProjectDetails
