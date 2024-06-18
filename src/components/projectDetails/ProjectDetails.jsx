import React from 'react'
import './ProjectDetails.css'

const ProjectDetails = ({ project }) => {
  return (
    <div className='project-details'>
      <h2>{project.nombreCampaña}</h2>
      <div className='image-project-ontainer'>
        <img src={project.img} alt={project.nombreCampaña} />
      </div>
      <p>{project.resumenProyecto}</p>
      <div className='search-container'>
        <span> ¿Quieres saber más sobre esta realidad?</span>
        <input type='text' placeholder={project.nombreCampaña}></input>
        <button className='search-button' type='submit'>
          <img
            src='images/search-icon.jpg'
            className='search-image'
            alt='buscar'
          />
        </button>
      </div>
    </div>
  )
}

export default ProjectDetails
