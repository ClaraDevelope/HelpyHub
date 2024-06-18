import React from 'react'
import './CardProject.css'
import { NavLink } from 'react-router-dom'
const CardProject = ({ project }) => {
  console.log(project)
  return (
    <div className='card-container'>
      <h3>{project.nombreCampaña}</h3>
      <NavLink to={`/project/${project.id}`}>
        <button className='link-button card-button'>+ info</button>
      </NavLink>

      <div className='img-card-container'>
        <img src={project.img} alt={project.nombreCampaña} />
      </div>
    </div>
  )
}

export default CardProject
