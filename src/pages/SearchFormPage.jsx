import React from 'react'
import Form from '../components/form/Form'
import Titles from '../components/titles/Titles'

const SearchFormPage = () => {
  return (
    <>
      <Titles
        title={'¡Únete a alguno de nuestros proyectos!'}
        subtitle={'Suscríbete a nuestro boletín y encuentra tu proyecto'}
      />
      <Form />
    </>
  )
}

export default SearchFormPage
