import React from 'react'
import './CardProject.css'
const CardProject = ({ project }) => {
  console.log(project)
  return (
    <div className='card-container'>
      <h3>{project.nombreCampaña}</h3>
      <div className='img-card-container'>
        <img src={project.img} alt={project.nombreCampaña} />
      </div>
    </div>
  )
}

export default CardProject
