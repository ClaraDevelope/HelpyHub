import React from 'react'
import './Titles.css'
const Titles = ({ title, subtitle = '' }) => {
  return (
    <div className='titles-container'>
      <h2 className='title'>{title}</h2>
      <h4 className='subtitle'>{subtitle}</h4>
    </div>
  )
}

export default Titles
