import React, { useReducer } from 'react'

const initialState = {
  name: '',
  surname: '',
  birthDate: '',
  email: '',
  adress: '',
  topics: [],
  format: '',
  collaborationReason: '',
  sendLetter: false,
  taxDeductible: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value
      }
    case 'RESET_FORM':
      return initialState
    default:
      return state
  }
}

const useFormReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setFieldValue = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value })
  }

  const resetForm = () => {
    dispatch({ type: 'RESET_FORM' })
  }

  return {
    state,
    setFieldValue,
    resetForm
  }
}

export default useFormReducer
