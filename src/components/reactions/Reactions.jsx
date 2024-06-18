import React from 'react'
import './Reactions.css'
const Reactions = () => {
  return (
    <ul className='reactions'>
      <li className='item-reaction'>
        <img src='/images/heart.webp' alt='like' />
      </li>
      <li className='item-reaction'>
        <img src='/images/comment-2.webp' alt='comment' />
      </li>
      <li className='item-reaction'>
        <img src='/images/holding-3.webp' alt='colaborate' />
        {/* <img src='/images/colaborate-3.png' alt='colaborate' /> */}
      </li>
    </ul>
  )
}

export default Reactions
