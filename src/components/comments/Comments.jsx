import React, { useRef, useState, useContext } from 'react'
import './Comments.css'
import { CommentsContext } from '../../hooks/react/CommentsProvider'

const Comments = () => {
  const [comments, setComments] = useState([])
  const { commentsVisible } = useContext(CommentsContext)
  const containerClass = commentsVisible
    ? 'comments-container visible'
    : 'comments-container'
  const inputComment = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newComment = inputComment.current.value
    if (newComment.trim() !== '') {
      setComments([...comments, newComment])
      inputComment.current.value = ''
    }
  }

  return (
    <div className={containerClass}>
      <ul className='comments'>
        {comments.map((comment, index) => (
          <li className='item-comment' key={index}>
            <img
              src='https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png'
              alt='user'
            />
            <p>{comment}</p>
          </li>
        ))}
      </ul>
      <form className='form-comment' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Escribe un comentario'
          ref={inputComment}
        />
        <button className='link-button' type='submit'>
          Enviar ▶
        </button>
      </form>
    </div>
  )
}

export default Comments
