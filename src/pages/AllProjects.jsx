import React from 'react'
import CardProject from '../components/cardProject/CardProject'
import { useLocation, useParams } from 'react-router-dom'
import { filterProjects } from '../functions/filterProjects'
import { PROJECTS } from '../data/data'

const AllProjects = ({ projects = PROJECTS }) => {
  const { searchValue } = useParams()
  const filteredProjects = searchValue ? filterProjects(searchValue) : projects

  return (
    <section className='projects-container'>
      {filteredProjects.map((project) => (
        <CardProject project={project} key={project.id} />
      ))}
    </section>
  )
}

export default AllProjects
