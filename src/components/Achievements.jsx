import React from 'react'
import { motion } from 'framer-motion'

const Page2 = () => {
    return (
        <>
            <div className="page2 w-full h-screen">
                <div className="elem flex flex-col md:flex-row p-3 md:p-6 justify-between gap-4 items-center w-full h-full">
                    <div className="elem_in h-auto md:h-[50vh] w-full md:w-[65%] p-2 md:p-3 flex justify-start flex-col items-center md:items-start relative">
                        <h1 className="text-white text-2xl md:text-4xl text-center md:text-left">First Time I have won a Hackathon</h1>
                        <motion.p className='mt-3 md:mt-5 font-serif font-medium text-sm md:text-base text-center md:text-left' initial={{ opacity: 0, y: 100, color: "blue" }} whileInView={{ opacity: 1, y: 0, color: "white" }} transition={{ duration: 1 }}>Started All Alone and won the Hackathon , <b>AIR 1</b></motion.p>
                        <motion.p className='mt-3 md:mt-5 font-medium text-base md:text-xl text-center md:text-left' initial={{ opacity: 0, y: 100, color: "blue" }} whileInView={{ opacity: 1, y: 0, color: "white" }} transition={{ duration: 1, delay: 0.5 }}>This Hackathon was about building a website for a startup and organised by <u>Codevidhya</u></motion.p>
                    </div>
                    <div className="result_code p-2 w-full md:w-[35%] h-[40vh] md:h-screen">
                        <motion.img initial={{ opacity: 0, x: 100 }} whileHover={{ scale: 1.1 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='rounded-3xl overflow-hidden w-full h-full object-cover' src="./result_codevidhya.jpg" alt="Hackathon Result" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page2