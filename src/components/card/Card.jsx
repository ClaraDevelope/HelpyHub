import React from 'react'
import './Card.css'

const Card = ({ project }) => {
  return (
    <div className='card'>
      {/* {console.log(project)} */}
      <h3>{project.nombreCampaña}</h3>
      <div className='img-container'>
        <img src={project.img} alt={project.nombreCampaña} />
      </div>
    </div>
  )
}

export default Card
