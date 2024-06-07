import React from 'react'
import './CallToAction.css'
import { NavLink } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className='first-section'>
      <div className='video-container'>
        <video src='public/video-4.mp4' autoPlay loop muted></video>
      </div>
      <NavLink to='/projects'>
        <button className='link-button absolute-button'>Ver campañas</button>
      </NavLink>
    </section>
  )
}

export default CallToAction
