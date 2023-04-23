import React from 'react'

const RightSide = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-end gap-8 text-textLight'>
            <a href="mailto:jeferson.correapino@gmail.com">
                <p className='text-3xl rotate-90 w-72 tracking-wide text-textGreen font-montserratFont hover:text-textLight'>
                    JFPrograma
                </p>
            </a>
            <div className='w-[2px] h-32 bg-textDark mt-4'></div>
        </div>
    )
}

export default RightSide