import React from 'react'
import LandingPage from './components/LandingPage';
import Lenis from 'lenis'
import "lenis/dist/lenis.css"

const App = () => {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);


  return (
    <>
      <LandingPage />
    </>
  )
}

export default App