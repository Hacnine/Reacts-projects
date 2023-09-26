import React from 'react';
import Intro from './components/Intro';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import './App.css'

function App() {

  return (
    <>
      <div>
        <Intro/>
        <Contact/>
        <Footer/>
        <Portfolio/>
        <Timeline/>
      </div>
    </>
  )
}

export default App
