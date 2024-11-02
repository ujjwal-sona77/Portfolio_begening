import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { motion } from 'framer-motion';

const Page2 = () => {
    return (
        <>
            <main className="relative">
                <div className="inner p-4 md:p-11 w-full min-h-screen flex flex-col md:flex-row justify-between items-center">
                    <div className="page2 w-full md:w-1/2 text-white text-center md:text-left mb-8 md:mb-0">
                        <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="text-xl md:text-2xl">I am From ,</motion.h1>
                        <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.5 }} className="text-3xl md:text-4xl mt-2"><b>Jaipuriar School</b></motion.h1>
                        <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.7 }} className="text-lg md:text-xl mt-3 md:mt-5">Studying in 9th Class</motion.p>
                    </div>
                    <div className="image_school w-full md:w-[50vw] flex justify-center items-center">
                        <img className="rounded-lg w-full md:w-full h-full md:h-[50vh] object-cover relative md:bottom-20" src="./school.jpg" alt="Jaipuriar School" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Page2