import React, { useRef, useEffect } from 'react'
import Card from '../card/Card'
import './Carrusel.css'

const Carrusel = ({ projects }) => {
  const sliderRef = useRef(null)
  // Guardo la refencia del elemento del DOM que quiero que sea scrolable en el eje X (horizontal)
  console.log('soy el carrusel y me renderizo')

  useEffect(() => {
    const slider = sliderRef.current
    // Aquí cojo la referencia del slider y al tratarse de un efecto vidual uso un useEffect.
    const handleWheel = (event) => {
      event.preventDefault()
      slider.scrollLeft += event.deltaY
      // Wheel (= rueda) es el evento que escucha la rueda del ratón o equivalentes.
      // deltaY me da la cantidad de desplazamiento vertical sugerida por la rueda del ratón
      //  Si event.deltaY es positivo (usuario desplaza hacia abajo), slider.scrollLeft aumenta, desplazando el contenido hacia la izquierda. Si event.deltaY es negativo (usuario desplaza hacia arriba), slider.scrollLeft disminuye, desplazando el contenido hacia la derecha.
    }
    if (slider) {
      slider.addEventListener('wheel', handleWheel)
    }
    return () => {
      if (slider) {
        slider.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  return (
    <div className='slider' ref={sliderRef}>
      {projects.map((project) => (
        <Card project={project} key={project.id} />
      ))}
    </div>
  )
}

export default Carrusel
