import React from 'react'
import './FeaturedCard.css'
import { NavLink } from 'react-router-dom'

const featuredCard = ({ project }) => {
  // console.log(project)
  return (
    <NavLink to={`/project/${project.id}`}>
      <div className='card'>
        <h3>{project.nombreCampaña}</h3>
        <div className='img-container'>
          <img src={project.img} alt={project.nombreCampaña} />
        </div>
      </div>
    </NavLink>
  )
}

export default featuredCard
