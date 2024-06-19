import React from 'react'
import CardProject from '../components/cardProject/CardProject'
import { useParams } from 'react-router-dom'
import { filterProjects } from '../functions/filterProjects'
import { PROJECTS } from '../data/data'
import FilterProjects from '../components/filterProjects/FilterProjects'

const AllProjects = ({ projects = PROJECTS }) => {
  const { searchValue } = useParams()
  const filteredProjects = searchValue ? filterProjects(searchValue) : projects
  return (
    <>
      <FilterProjects projects={PROJECTS} />
      <section className='projects-container'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <CardProject project={project} key={project.id} />
          ))
        ) : (
          <p>No se han encontrado resultados para : "{searchValue}"</p>
        )}
      </section>
    </>
  )
}

export default AllProjects
