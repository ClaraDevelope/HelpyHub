import React from 'react'
import { useLocation } from 'react-router-dom'
import { PROJECTS } from '../data/data'
import ProjectDetails from '../components/projectDetails/ProjectDetails'

const Project = () => {
  const location = useLocation()
  const projectId = location.pathname.split('/').pop()
  const project = PROJECTS.find((project) => project.id === projectId)

  if (!project) {
    return <p>Proyecto no encontrado.</p>
  }

  return (
    <section className='project-details-section projects-container'>
      <ProjectDetails project={project} />
    </section>
  )
}

export default Project
