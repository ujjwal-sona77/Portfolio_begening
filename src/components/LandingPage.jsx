import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from '@react-three/drei';
import "../style.css";
import Cyl from './Cyl';
import { Bloom } from '@react-three/postprocessing';
import { EffectComposer } from '@react-three/postprocessing';
import { ToneMapping } from '@react-three/postprocessing';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <>
      <main className='font-aerial w-full min-h-screen bg-zinc-900'>
        <div className="page1 w-full h-screen">
          <div className="w-full flex flex-col md:flex-row justify-between items-start page1 h-screen">
            <motion.nav className='text-white text-base md:text-xl p-3 md:p-5 flex flex-col md:flex-row justify-between items-center h-auto md:h-[11vh] w-full'>
              <h1 className='mb-3 md:mb-0'>Hey this is <b>Ujjwal Sonawat</b>,</h1>
              <div className='flex gap-4'>
                <motion.a whileHover={{ color: "cyan", scale: 1.1 }} whileTap={{ scale: 1.3 }} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} href="https://github.com/ujjwal-sona77" target='_blank'>
                  Github
                </motion.a>
                <motion.a whileHover={{ color: "cyan", scale: 1.1 }} whileTap={{ scale: 1.3 }} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} href="https://ujjwalsonawat7@gmail.com" target='_blank'>
                  Email
                </motion.a>
              </div>
            </motion.nav>
            <div className='w-full h-[50vh] md:h-screen md:w-[100vw] Canvas'>
              <Canvas camera={{ fov: 69 }}>
                <OrbitControls enableZoom={false} />
                <ambientLight />
                <Cyl />
                <EffectComposer>
                  <Bloom
                    intensity={20}
                    luminanceThreshold={2}
                    luminanceSmoothing={2}
                  />
                  <ToneMapping adaptive={true} />
                </EffectComposer>
              </Canvas>
            </div>
            <div className="elems absolute left-3 top-[19vh] text-white text-base md:text-xl p-4 md:p-0">
              <motion.h1 initial={{ opacity: 0, y: 90 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="text-lg md:text-xl">I am Ujjwal Sonawat and Full Stack Developer ,</motion.h1>
              <motion.p className='mt-2' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, delay: 0.5 }}>I am Student Studying in Class 9th</motion.p>
              <motion.p className='mt-2' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, delay: 0.7 }}>Mainly , My motive is to learn new things and implement them in my projects <br className="hidden md:block" /> and I am always ready to participate in new Competions in Hackathons</motion.p>
            </div>
          </div>
        </div>
        <div className="page2 w-full h-screen">
          <div className="elem flex p-6 justify-between gap-4 items-center w-full h-full">
            <div className="elem_in bottom-36 h-[50vh] w-[65%] p-3 flex justify-start flex-col items-centre relative">
              <h1 className="text-white text-4xl">First Time I have won a Hackathon</h1>
              <motion.p className='mt-5 font-serif font-medium' initial={{ opacity: 0, y: 100, color: "blue" }} whileInView={{ opacity: 1, y: 0, color: "white" }} transition={{ duration: 1 }}>Started All Alone and won the Hackathon , <b>AIR 1</b></motion.p>
              <motion.p className='mt-5 font-medium  text-xl' initial={{ opacity: 0, y: 100, color: "blue" }} whileInView={{ opacity: 1, y: 0, color: "white" }} transition={{ duration: 1, delay: 0.5 }}>This Hackathon was about building a website for a startup and organised by <u>Codevidhya</u></motion.p>
            </div>
            <div className="result_code p-2 w-[35%] h-screen">
              <motion.img initial={{ opacity: 0, x: 100 }} whileHover={{scale: 1.3}} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='rounded-3xl overflow-hidden w-full object-cover' src="./result_codevidhya.jpg" alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LandingPage;