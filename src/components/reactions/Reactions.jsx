import React, { useContext, useEffect, useRef, useState } from 'react'
import './Reactions.css'
import { CommentsContext } from '../../hooks/react/CommentsProvider'

const Reactions = () => {
  const likeButton = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const { toggleCommentsVisible } = useContext(CommentsContext)

  const likeClick = (e) => {
    e.preventDefault()
    setIsActive((prev) => !prev)
  }

  const commentClick = (e) => {
    e.preventDefault()
    toggleCommentsVisible()
  }

  useEffect(() => {
    if (likeButton.current) {
      const parentLi = likeButton.current.closest('.item-reaction')
      if (isActive) {
        parentLi.classList.add('clicked-like')
      } else {
        parentLi.classList.remove('clicked-like')
      }
    }
  }, [isActive])

  return (
    <ul className='reactions'>
      <li className='item-reaction'>
        <button
          className='button-reaction'
          onClick={likeClick}
          ref={likeButton}
          value='like'
        >
          <img src='/images/heart.webp' alt='like' />
          <span>Me gusta</span>
        </button>
      </li>
      <li className='item-reaction'>
        <button className='button-reaction' onClick={commentClick}>
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
