import React from 'react'

export default function NavBar() {

  return (
    <div className='flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 backdrop-opacity-30 fixed top-0 left-0 w-full shadow-md z-30 text-black '>
      <h2 className='font-bold text-xl md:text-2xl mb-2 md:mb-0'>
        Lucas.DEV
      </h2>
      <div className='flex gap-4 font-bold'> 
        <a href="#home">Inicio</a>
        <a href="#about">Acerca de mi</a>
        <a href="#projects">Proyectos</a>
      </div>
    </div>
  )
}
