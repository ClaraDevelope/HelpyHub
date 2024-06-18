import React from 'react'
import './Form.css'
import useFormReducer from '../../hooks/react/useFormReducer'
import { PROJECTS } from '../../data/data'

const Form = () => {
  const { state, setFieldValue, resetForm } = useFormReducer()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form data:', state)
    resetForm()
  }

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target
    const updatedTopics = checked
      ? [...state.topics, value]
      : state.topics.filter((topic) => topic !== value)
    setFieldValue('topics', updatedTopics)
  }

  return (
    <form className='help-form' onSubmit={handleSubmit}>
      <div className='name-surname-container'>
        <label className='help-form-label'>
          Nombre:
          <input
            type='text'
            value={state.name}
            onChange={(e) => setFieldValue('name', e.target.value)}
            required
          />
        </label>
        <label className='help-form-label'>
          Apellidos:
          <input
            type='text'
            value={state.surname}
            onChange={(e) => setFieldValue('surname', e.target.value)}
            required
          />
        </label>
      </div>
      <div className='birth-email-container'>
        <label className='help-form-label'>
          Año de nacimiento:
          <input
            type='date'
            value={state.birthDate}
            onChange={(e) => setFieldValue('birthDate', e.target.value)}
            required
          />
        </label>
        <label className='help-form-label'>
          Email:
          <input
            type='email'
            value={state.email}
            onChange={(e) => setFieldValue('email', e.target.value)}
            required
          />
        </label>
      </div>
      <label className='adress help-form-label'>
        Dirección:
        <input
          type='text'
          value={state.adress}
          onChange={(e) => setFieldValue('adress', e.target.value)}
        />
      </label>
      <div className='topics-container'>
        <label className='help-form-label'>Ámbitos de ayuda:</label>
        <div className='topic-options'>
          {/* Itero sobre las etiquetas de los proyectos */}
          {PROJECTS.reduce((allTags, project) => {
            project.etiquetas.forEach((tag) => {
              if (!allTags.includes(tag)) {
                allTags.push(tag)
              }
            })
            return allTags
          }, []).map((tag) => (
            <label key={tag}>
              <input
                type='checkbox'
                value={tag}
                checked={state.topics.includes(tag)}
                onChange={handleCheckboxChange}
              />
              {tag}
            </label>
          ))}
        </div>
      </div>
      <label className='help-form-label'>
        Formato:
        <select
          value={state.format}
          onChange={(e) => setFieldValue('format', e.target.value)}
          required
        >
          <option value=''>Selecciona una opción</option>
          <option value='in-person'>En persona</option>
          <option value='monetary contribution'>Aportación económica</option>
        </select>
      </label>
      {state.format === 'in-person' && (
        <label className='help-form-label'>
          Por qué quieres colaborar:
          <textarea
            value={state.collaborationReason}
            onChange={(e) =>
              setFieldValue('collaborationReason', e.target.value)
            }
            required
          />
        </label>
      )}
      {state.format === 'monetary contribution' && (
        <div className='economic-details'>
          <label className='help-form-label'>
            ¿Desea enviar una carta a la entidad, persona o colectivo a la que
            esté ayudando?
            <input
              type='checkbox'
              checked={state.sendLetter}
              onChange={(e) => setFieldValue('sendLetter', e.target.checked)}
            />
          </label>
          <label className='help-form-label'>
            ¿Desea desgravar su donación en la declaración de la renta?
            <input
              type='checkbox'
              checked={state.taxDeductible}
              onChange={(e) => setFieldValue('taxDeductible', e.target.checked)}
            />
          </label>
        </div>
      )}
      <button className='send link-button' type='submit'>
        Enviar
      </button>
    </form>
  )
}

export default Form
