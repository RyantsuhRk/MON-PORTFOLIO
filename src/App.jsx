import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import Experience from './components/Competence/Experience'


function App() {

  return (
    <div className='class-appDark'>  
      <Home />
      <About />
      <Experience/>
      <Portfolio />
      <Contact />
      <Footer />  
    </div>
  )
}

export default App
