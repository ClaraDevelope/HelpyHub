import React from 'react'
import './MoreDetails.css'

const MoreDetails = ({ presencial, online, entity, web }) => {
  return (
    <div className='more-info'>
      <div className='social-entity'>
        {entity && (
          <p className='entity'>
            Entidad: <strong>{entity}</strong>{' '}
          </p>
        )}
        {web && (
          <p>
            Página web:&nbsp;
            <a href={web} className='web' target='blank'>
              {web}
            </a>
          </p>
        )}
      </div>
      <div className='type-container'>
        {presencial && <p className='type'>Presencial</p>}
        {online && <p className='type'>Online</p>}
      </div>
    </div>
  )
}

export default MoreDetails
