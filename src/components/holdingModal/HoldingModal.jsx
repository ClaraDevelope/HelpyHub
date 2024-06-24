import React, { useRef } from 'react'
import './HoldingModal.css'

const HoldingModal = ({ show, onClose }) => {
  const emailRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailValue = emailRef.current.value
    console.log(emailValue) // Aquí puedes hacer lo que necesites con el valor del correo electrónico
    onClose()
  }

  if (!show) {
    return null
  }

  return (
    <div className='modal-backdrop' onClick={onClose}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <h2>¡Gracias por apoyar este proyecto!</h2>
        <p>
          Déjanos tu correo electrónico y te enviaremos los detalles para poder
          colaborar con este proyecto
        </p>
        <form className='mail-form' onSubmit={handleSubmit}>
          <input
            type='email'
            ref={emailRef}
            required
            placeholder='Escribe tu correo electrónico'
          />
          <button type='submit' className='link-button'>
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default HoldingModal
