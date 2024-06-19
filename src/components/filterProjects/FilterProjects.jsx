import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './FilterProjects.css'

const FilterProjects = ({ projects }) => {
  const [tags, setTags] = useState([])
  const navigate = useNavigate()
  // useEffect para cuando el array de proyectos cambia
  // usamos flatMap para unificar en un solo array todas las etiquetas (con el map sale un array de arrays)
  // ...new Set crear un nuevo array eliminando las etiquetas duplicadas
  useEffect(() => {
    const uniqueTags = [
      ...new Set(projects.flatMap((project) => project.etiquetas))
    ]
    setTags(['- Todas las opciones -', ...uniqueTags])
  }, [projects])

  const handleOnChange = (e) => {
    const searchValue = e.target.value
    if (searchValue === '- Todas las opciones -') {
      navigate('/projects')
    } else {
      navigate(`/projects/search/${searchValue}`)
    }
  }

  return (
    <div className='select-container'>
      <select name='tags' id='tags' onChange={handleOnChange}>
        {tags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterProjects
