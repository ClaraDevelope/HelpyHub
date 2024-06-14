import React, { useState } from 'react'
import './Form.css'
const Form = () => {
  const [Name, setName] = useState('')
  const [Surname, setSurname] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [email, setEmail] = useState('')
  const [topics, setTopics] = useState([])
  const [format, setFormat] = useState('')
  const [collaborationReason, setCollaborationReason] = useState('')
  const [sendLetter, setSendLetter] = useState(false)
  const [taxDeductible, setTaxDeductible] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form data:', {
      fullName,
      birthYear,
      email,
      topics,
      format,
      collaborationReason,
      sendLetter,
      taxDeductible
    })
  }
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target
    if (checked) {
      setTopics([...topics, value])
    } else {
      setTopics(topics.filter((topic) => topic !== value))
    }
  }

  return (
    <form className='help-form' onSubmit={handleSubmit}>
      <div className='name-surname-container'>
        <label className='help-form-label'>
          Nombre:
          <input
            type='text'
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className='help-form-label'>
          Apellidos:
          <input
            type='text'
            value={Surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </label>
      </div>
      <div className='birth-email-container'>
        <label className='help-form-label'>
          Año de nacimiento:
          <input
            type='date'
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
            required
          />
        </label>
        <label className='help-form-label'>
          Email:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div className='topics-container'>
        <label className='help-form-label'>Ámbitos de ayuda:</label>
        <div className='topic-options'>
          <label className='help-form-label'>
            <input
              type='checkbox'
              value='human rights'
              checked={topics.includes('human rights')}
              onChange={handleCheckboxChange}
            />
            Derechos Humanos
          </label>
          <label className='help-form-label'>
            <input
              type='checkbox'
              value='women victims of gender violence'
              checked={topics.includes('women victims of gender violence')}
              onChange={handleCheckboxChange}
            />
            Violencia de género
          </label>
        </div>
      </div>
      <label className='help-form-label'>
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
        <label className='help-form-label'>
          Por qué quieres colaborar / Presentación:
          <textarea
            value={collaborationReason}
            onChange={(e) => setCollaborationReason(e.target.value)}
            required
          />
        </label>
      )}
      {format === 'monetary contribution' && (
        <div className='economic-details'>
          <label className='help-form-label'>
            ¿Desea enviar una carta a la entidad, persona o colectivo a la que
            esté ayudando?
            <input
              type='checkbox'
              checked={sendLetter}
              onChange={(e) => setSendLetter(e.target.checked)}
            />
          </label>
          <label className='help-form-label'>
            ¿Desea desgravar su donación en la declaración de la renta?
            <input
              type='checkbox'
              checked={taxDeductible}
              onChange={(e) => setTaxDeductible(e.target.checked)}
            />
          </label>
        </div>
      )}
      <button className='send link-button' type='submit'>
        Enviar
      </button>
    </form>
    // <form className='help-form' onSubmit={handleSubmit}>
    //   <div className='name-surname-container'>
    //     <label className='help-form-label'>
    //       Nombre:
    //       <input
    //         type='text'
    //         value={Name}
    //         onChange={(e) => setName(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <label className='help-form-label'>
    //       Apellidos:
    //       <input
    //         type='text'
    //         value={Surname}
    //         onChange={(e) => setSurname(e.target.value)}
    //         required
    //       />
    //     </label>
    //   </div>
    //   <div className='birth-email-container'>
    //     <label className='help-form-label'>
    //       Año de nacimiento:
    //       <input
    //         type='number'
    //         value={birthYear}
    //         onChange={(e) => setBirthYear(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <label className='help-form-label'>
    //       Email:
    //       <input
    //         type='email'
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //     </label>
    //   </div>
    //   <div className='topics-container'>
    //     <label className='help-form-label'>Ámbitos de ayuda:</label>
    //     <div className='topic-options'>
    //       <label className='help-form-label'>
    //         <input
    //           type='checkbox'
    //           value='human rights'
    //           checked={topics.includes('human rights')}
    //           onChange={handleCheckboxChange}
    //         />
    //         Derechos Humanos
    //       </label>
    //       <label className='help-form-label'>
    //         <input
    //           type='checkbox'
    //           value='women victims of gender violence'
    //           checked={topics.includes('women victims of gender violence')}
    //           onChange={handleCheckboxChange}
    //         />
    //         Violencia de género
    //       </label>
    //     </div>
    //   </div>
    //   <label className='help-form-label'>
    //     Formato:
    //     <select
    //       value={format}
    //       onChange={(e) => setFormat(e.target.value)}
    //       required
    //     >
    //       <option value=''>Selecciona una opción</option>
    //       <option value='in-person'>En persona</option>
    //       <option value='monetary contribution'>Aportación económica</option>
    //     </select>
    //   </label>
    //   {format === 'in-person' && (
    //     <label className='help-form-label'>
    //       Por qué quieres colaborar / Presentación:
    //       <textarea
    //         value={collaborationReason}
    //         onChange={(e) => setCollaborationReason(e.target.value)}
    //         required
    //       />
    //     </label>
    //   )}
    //   {format === 'monetary contribution' && (
    //     <div className='economic-details'>
    //       <label className='help-form-label'>
    //         ¿Desea enviar una carta a la entidad, persona o colectivo a la que
    //         esté ayudando?
    //         <input
    //           type='checkbox'
    //           checked={sendLetter}
    //           onChange={(e) => setSendLetter(e.target.checked)}
    //         />
    //       </label>
    //       <label className='help-form-label'>
    //         ¿Desea desgravar su donación en la declaración de la renta?
    //         <input
    //           type='checkbox'
    //           checked={taxDeductible}
    //           onChange={(e) => setTaxDeductible(e.target.checked)}
    //         />
    //       </label>
    //     </div>
    //   )}
    //   <button className='send' type='submit'>
    //     Enviar
    //   </button>
    // </form>
  )
}

export default Form
