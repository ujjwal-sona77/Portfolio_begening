import React from 'react'
import LandingPage from './components/LandingPage';
import Lenis from 'lenis'
import "lenis/dist/lenis.css"
import Achievements from './components/Achievements';
import { Routes, Route } from 'react-router-dom';
import Page2 from './components/Page2';

const App = () => {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);


  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/achievements' element={<Achievements />} />
      </Routes>

    </>
  )
}

export default App