import React from 'react'
import './Reactions.css'
const Reactions = () => {
  return (
    <ul className='reactions'>
      <li className='item-reaction'>
        <button className='button-reaction'>
          <img src='/images/heart.webp' alt='like' />
          <span>Me gusta</span>
        </button>
      </li>
      <li className='item-reaction'>
        <button className='button-reaction'>
          <img src='/images/comment-2.webp' alt='comment' />
          <span>Comentar</span>
        </button>
      </li>
      <li className='item-reaction'>
        <button className='button-reaction'>
          <img src='/images/holding-3.webp' alt='colaborate' />
          <span>Apoyar</span>
        </button>
      </li>
    </ul>
  )
}

export default Reactions
