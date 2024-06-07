import React from 'react'
import { PROJECTS } from '../../data/data'
import Card from '../card/Card'
import './FeaturedProjects.css'

const FeaturedProjects = () => {
  const filteredProjects = PROJECTS.filter((project) => {
    // console.log(project.etiquetas.includes('destacado'))
    return project.etiquetas.includes('destacado')
  })

  return (
    <section className='second-section'>
      <h2>Campañas destacadas:</h2>
      <div className='slider'>
        {filteredProjects.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
