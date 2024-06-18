import { PROJECTS } from '../data/data'

export const filterProjects = (value) => {
  const searchTerm = value.toLowerCase()

  const filteredProjects = PROJECTS.filter((project) => {
    const projectName = project.nombreCampaña
      ? project.nombreCampaña.toLowerCase()
      : ''
    const projectTags = Array.isArray(project.etiquetas)
      ? project.etiquetas.map((tag) => tag.toLowerCase())
      : []

    return (
      projectName.includes(searchTerm) ||
      projectTags.some((tag) => tag.includes(searchTerm))
    )
  })
  console.log(filteredProjects)

  return filteredProjects
}
