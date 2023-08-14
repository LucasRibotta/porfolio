import React from 'react'
import Card from './Card'
import { projects } from '../../data'


const Projects = () => {
  return (
    <div className="pt-[3rem] mt-[4rem] lg:mx-2 sm:mx-auto xl:mx-auto sm:text-center bg-white text-black rounded-[50px] shadow-lg shadow-slate-900" id="projects">
      <div className='flex flex-col mx-2 '>
        <h2 className='text-violet-800 font-bold '>PORTFOLIO</h2>
        <p className='mt-8 font-medium '>Les presento los proyectos en los que participe.</p>
      </div>
      {projects?.map((el, index) => <Card key={index} title={el.title} description={el.description} image={el.image} TechStack={el.TechStack} page={el.page} code={el.code} direction={index % 2 === 0 ? false : true} />)}
    </div>
  )
}

export default Projects