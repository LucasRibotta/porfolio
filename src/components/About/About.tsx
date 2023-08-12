import Image from "next/image"
import Desarrollador from '../../assets/AboutImg.jpg'

export default function About() {
  return (
    <div className='min-h-[70vh] flex flex-col-reverse mx-3 lg:grid lg:grid-cols-2 bg-white items-center rounded-[50px] overflow-hidden mt-[100px] shadow-lg shadow-slate-900' id="about">
      <div className='p-16 flex flex-col justify-around h-full items-start'>
        <h2 className='text-violet-800 font-extrabold'>ACERCA DE MI</h2>
        <h3 className='font-semibold text-xl'>Un dedicado desarrollador Full Stack ubicado en Córdoba, Argentina</h3>
        <p className='text-start'>
          Como desarrollador Full Stack altamente competente, tengo un profundo conocimiento en una amplia variedad de tecnologías. Mi experiencia incluye dominio en <b>React, Redux, JavaScript, TypeScript, Next.Js, Express, Sequelize, PostgreSQL, MongoDB, CSS, HTML, Git, Tailwind y Node.Js</b> . Mi pasión por la creación de soluciones innovadoras se ve reflejada en mi habilidad para diseñar y desarrollar aplicaciones web sofisticadas, asegurando un rendimiento óptimo y una experiencia excepcional para el usuario en cada proyecto. Con un enfoque proactivo y sólidas habilidades analíticas, me esfuerzo por superar los desafíos técnicos y entregar productos de alta calidad que satisfagan las necesidades de mis clientes.
          ¡Estoy aquí para ayudarte con cualquier pregunta o problema relacionado con el desarrollo!</p>
        <a href='https://drive.google.com/file/d/1V39_MOtZ_S2ozXJYk6Hjz-3NYapcIVqK/view?usp=sharing' className='mt-[1rem] px-6 py-3 bg-violet-900 font-semibold text-white rounded-md hover:bg-violet-600 hover:text-violet-900 transition-all duration-300 ' target='blank' >Curriculum</a>
      </div>
      <Image src={Desarrollador} alt="compu" className='h-[70%] rounded-lg md:m-auto animate-flip-up animate-once ' />
    </div>
  )

}
