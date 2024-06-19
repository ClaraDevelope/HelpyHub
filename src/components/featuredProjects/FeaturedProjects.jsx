import React from 'react'
import { PROJECTS } from '../../data/data'
import './FeaturedProjects.css'
import Carrusel from '../carrusel/Carrusel'
const FeaturedProjects = () => {
  console.log('Soy las campañas destacadas y me renderizo')
  const filteredProjects = PROJECTS.filter((project) => {
    return project.etiquetas.includes('Destacado')
  })
  return (
    <section className='second-section'>
      <h2>Campañas destacadas:</h2>
      <Carrusel projects={filteredProjects} />
    </section>
  )
}

export default FeaturedProjects
