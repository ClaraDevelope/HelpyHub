import React from 'react'
import CardProject from '../components/cardProject/CardProject'

const AllProjects = ({ projects }) => {
  console.log(projects)

  return (
    <section className='projects-container'>
      {projects.map((project) => (
        <CardProject project={project} key={project.id} />
      ))}
    </section>
  )
}

export default AllProjects
