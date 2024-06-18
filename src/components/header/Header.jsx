import React, { useRef } from 'react'
import './Header.css'
import useScrollEffect from '../../hooks/custom/useScrollEffect'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const searchInput = useRef()

  const navigate = useNavigate()
  const handleSubmit = () => {
    const searchValue = searchInput.current.value
    navigate(`/projects/search/${searchValue}`)
  }

  console.log('Soy el header y me estoy renderizando')
  const headerRef = useRef(null)
  useScrollEffect((isScrolled) => {
    if (headerRef.current) {
      if (isScrolled) {
        headerRef.current.classList.add('scrolled')
      } else {
        headerRef.current.classList.remove('scrolled')
      }
    }
  })
  return (
    <header>
      <ul className='header' ref={headerRef}>
        <li className='logo'>
          <NavLink to=''>
            <h1>HelpyHub</h1>
            <img src='images/exclamation-mark.png' alt='exclamation-logo' />
          </NavLink>
        </li>
        <li className='search-container'>
          <input type='text' ref={searchInput} placeholder='Buscar...'></input>
          <button
            className='search-button'
            type='submit'
            onClick={handleSubmit}
          >
            <img src='images/search-icon.jpg' className='search-image'></img>
          </button>
        </li>
        <li className='button-container'>
          <NavLink to='form-search-project'>
            <button className='link-button'>Colabora YA!</button>
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
