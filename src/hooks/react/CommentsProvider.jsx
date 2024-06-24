import React, { createContext, useState } from 'react'

export const CommentsContext = createContext()

const CommentsProvider = ({ children }) => {
  const [commentsVisible, setCommentsVisible] = useState(false)

  const toggleCommentsVisible = () => {
    setCommentsVisible((prev) => !prev)
  }

  return (
    <CommentsContext.Provider
      value={{ commentsVisible, toggleCommentsVisible }}
    >
      {children}
    </CommentsContext.Provider>
  )
}

export default CommentsProvider
