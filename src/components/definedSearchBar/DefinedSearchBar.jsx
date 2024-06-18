import React from 'react'
import './DefinedSearchBar.css'

const SearchBar = ({ value }) => {
  const searchValue = value
  const handleSubmit = (event) => {
    event.preventDefault()
    if (searchValue.trim() !== '') {
      window.open(
        `https://www.google.es/search?q=${encodeURIComponent(searchValue)}`,
        '_blank'
      )
    }
  }
  return (
    <form onSubmit={handleSubmit} className='search-container search-to-google'>
      <span> ¿Quieres saber más sobre esta realidad?</span>
      <input
        type='text'
        value={searchValue}
        readOnly
        placeholder='Buscar en Google'
      />
      <button className='search-button' type='submit'>
        <img
          src='/images/google-icon.png'
          className='search-image'
          alt='buscar'
        />
      </button>
    </form>
  )
}

export default SearchBar
