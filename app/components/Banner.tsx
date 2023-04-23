"use client"
import { motion } from 'framer-motion'

function Banner() {
  return (
    <div id='inicio' className='max-w-contentContainer mx-auto py-10 mdl:py-24x flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
        <motion.h3 
        initial={{y:10, opacity: 0}}
        animate={{y:0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.6}}
        className='text-lg font-interFont tracking-wide text-textGreen'>Hola, mi nombre es</motion.h3>
        <motion.h1
        initial={{y:10, opacity: 0}}
        animate={{y:0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-4xl lgl:text-6xl font-interFont font-semibold flex flex-col'
        >Jeferson Correa. <span className='text-textDark mt-2 lgl:mt-4'>Soy desarrollador FullStack.</span> </motion.h1>
        <motion.p 
        initial={{y:10, opacity: 0}}
        animate={{y:0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.8}}
        className='text-base md:max-w-[650px] text-textDark font-medium'>Soy un desarrollador con más de 3 años de experiencia, trabajando desde el lado del backend, utilizando tecnologías como PHP con algunos de sus mas conocidos frameworks como laravel, zend framework, etc. Actualmente he expandido mis conocimientos al lado del frontend aprendiendo nuevas tecnologías como reactjs y angular.{" "}</motion.p>
        <motion.button
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.5}}
            className='w-52 h-14 text-sm font-montserratFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'
        >
            Mis proyectos!
        </motion.button>
    </div>
  )
}

export default Banner