import React from 'react'
import Form from '../components/form/Form'
import Titles from '../components/titles/Titles'

const HelpFormPage = () => {
  return (
    <>
      <Titles
        title={'¡Únete a alguno de nuestros proyectos!'}
        subtitle={'Encuentra el proyecto perfecto para tí'}
      />
      <Form />
    </>
  )
}

export default HelpFormPage
