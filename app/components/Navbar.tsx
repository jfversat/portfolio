"use client"
import { profilePng } from '@/public/assets'
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header className='w-full shadow-navbarShadow h-20 lg:h[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
            <section className='max-w-container h-full mx-auto py-1 flex items-center justify-between'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image className='w-14 border border-teal-700 rounded-full' src={profilePng} alt="logo" />
                </motion.div>
                <div className='hidden mdl:inline-flex items-center gap-8'>
                    <ul className='flex gap-8 text-lg'>
                        <Link className='hover:text-textGreen' href="#inicio"><motion.li
                            initial={{y:-10, opacity:0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 0.1}}
                        >Inicio</motion.li></Link>
                        <Link className='hover:text-textGreen' href="#habilidades"><motion.li
                            initial={{y:-10, opacity:0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 0.1, delay: 0.1}}
                        >Habilidades</motion.li></Link>
                        <Link className='hover:text-textGreen' href="#experiencia"><motion.li
                            initial={{y:-10, opacity:0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 0.1, delay: 0.2}}
                        >Experiencia</motion.li></Link>
                        <Link className='hover:text-textGreen' href="https://www.linkedin.com/in/jeferson-correa/" target='_blank'><motion.li
                            initial={{y:-10, opacity:0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 0.1, delay: 0.3}}
                        >LinkedIn</motion.li></Link>
                        <Link className='hover:text-textGreen' href="#conoceme"><motion.li
                            initial={{y:-10, opacity:0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 0.1, delay: 0.4}}
                        >Conoceme</motion.li></Link>
                    </ul>
                    <a href='/assets/cv.pdf' target='_blank'>
                        <motion.button className='px-4 rounded-md text-textGreen text-lg border border-textGreen hover:bg-hoverColor'
                        initial={{opacity:0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.5}}
                        >JF</motion.button>
                    </a>
                </div>
                {/* Menu Icon */}
                <div className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
                </div>
            </section>
        </header>
    )
}

export default Navbar