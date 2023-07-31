import React from 'react'

export default function NavBar() {

  return (
    <div className='flex w-[100%]  justify-between px-12 py-6 backdrop-blur-sm fixed drop-shadow-md z-30 text-black '>
      <h2 className='font-bold text-[20px]'>
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
