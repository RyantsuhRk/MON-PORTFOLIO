import React from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'
import './App.css'
import Experience from './pages/Competence/Experience'
import {DarkMode,LightMode} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux"
import { IconButton } from '@mui/material'
import { toggleTheme } from './features/themeSlice'
import {motion} from 'framer-motion'

const variants= {
  initial: {
   scale:0.3
  },
  animate: {
   scale:1.5,
   transition:{
    repeat:Infinity,
    duration:2
   }
  }
}

function App() {
    const theme=useSelector(state=>state.theme.isDark)
    const dispatch=useDispatch()

  return (
    <div className={`${theme? "appLight" : "appDark"}`} > 
      <div className={`bgMode ${theme? "bgModeLight": "bgModeDark"}`}>
        <motion.div className="buttonChange_mode" variants={variants}  initial="initial" whileInView="animate">
        {theme ? (
                <LightMode className='sunIcon' onClick={() => dispatch(toggleTheme(!theme))} />
              ) : (
                <DarkMode className="moonIcon"  onClick={() => dispatch(toggleTheme(!theme))} />
              )}
        </motion.div>
      </div>
       
      <section  id='Home'><Home /></section>
      <section id='About'><About /></section>
      <section id="Experience"><Experience/></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><Contact /></section>
      <Footer />  
    </div>
  )
}

export default App
