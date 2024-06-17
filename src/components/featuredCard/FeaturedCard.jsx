import React from 'react'
import './FeaturedCard.css'

const featuredCard = ({ project }) => {
  // console.log(project)
  return (
    <div className='card'>
      <h3>{project.nombreCampaña}</h3>
      <div className='img-container'>
        <img src={project.img} alt={project.nombreCampaña} />
      </div>
    </div>
  )
}

export default featuredCard
