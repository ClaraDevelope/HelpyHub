import React from 'react'
import './Footer.css'

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='social-icons'>
          <a href='#'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='#'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='#'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
        <div className='newsletter'>
          <h3>Suscríbete a nuestro boletín</h3>
          <form>
            <input type='email' placeholder='Ingresa tu correo electrónico' />
            <button type='submit' onClick={handleSubmit}>
              Suscribirse
            </button>
          </form>
        </div>
      </div>
      <div className='license'>
        <p>
          Creado por Clara Manzano Corona 💟 RockTheCode{' '}
          <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.es'>
            <img
              className='creative-commons'
              src='https://licensebuttons.net/l/zero/1.0/80x15.png'
              alt='CC0 1.0 Universal (CC0 1.0) Public Domain Dedication'
            />
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
