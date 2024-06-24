import React from 'react'
import './MoreDetails.css'

const MoreDetails = ({ presencial, online }) => {
  return (
    <div className='type-container'>
      {presencial && <p className='type'>Presencial</p>}
      {online && <p className='type'>Online</p>}
    </div>
  )
}

export default MoreDetails
