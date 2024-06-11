import React, { useState } from 'react'
import './HelpFormPage.css'

const HelpFormPage = () => {
  const [fullName, setFullName] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('')
  const [format, setFormat] = useState('')
  const [collaborationReason, setCollaborationReason] = useState('')
  const [sendLetter, setSendLetter] = useState(false)
  const [taxDeductible, setTaxDeductible] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Here you can send the form data to your server or perform any action
    console.log('Form data:', {
      fullName,
      birthYear,
      email,
      topic,
      format,
      collaborationReason,
      sendLetter,
      taxDeductible
    })
  }

  return (
    <form className='help-form' onSubmit={handleSubmit}>
      <label>
        Nombre completo:
        <input
          type='text'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </label>
      <label>
        Año de nacimiento:
        <input
          type='number'
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Ámbitos de ayuda:
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        >
          <option value=''>Selecciona una opción</option>
          <option value='human rights'>Human Rights</option>
          <option value='women victims of gender violence'>
            Women Victims of Gender Violence
          </option>
          {/* Add more options as needed */}
        </select>
      </label>
      <label>
        Formato:
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          required
        >
          <option value=''>Selecciona una opción</option>
          <option value='in-person'>En persona</option>
          <option value='monetary contribution'>Aportación económica</option>
        </select>
      </label>
      {format === 'in-person' && (
        <label>
          Por qué quieres colaborar / Presentación:
          <textarea
            value={collaborationReason}
            onChange={(e) => setCollaborationReason(e.target.value)}
            required
          />
        </label>
      )}
      {format === 'monetary contribution' && (
        <div>
          <label>
            ¿Desea enviar una carta a la entidad, persona o colectivo a la que
            esté ayudando?
            <input
              type='checkbox'
              checked={sendLetter}
              onChange={(e) => setSendLetter(e.target.checked)}
            />
          </label>
          <label>
            ¿Desea desgravar su donación en la declaración de la renta?
            <input
              type='checkbox'
              checked={taxDeductible}
              onChange={(e) => setTaxDeductible(e.target.checked)}
            />
          </label>
        </div>
      )}
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default HelpFormPage
