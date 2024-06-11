import { useEffect } from 'react'

const useScrollEffect = (callback) => {
  useEffect(() => {
    // handleScroll que se activará cuando ocurra un evento de desplazamiento y este desplazamiento es mayor que 0 en el eje vertical.
    // Si es así, llamo a la función callback pasando true como argumento, lo que indica que hay desplazamiento.
    const handleScroll = () => {
      callback(window.scrollY > 0)
    }
    // Luego, agrego un event listener al evento de scroll de la ventana (window)y lipio este event listener cuando el componente se desmonte.
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [callback])
}

export default useScrollEffect
