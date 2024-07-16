import React,{useEffect} from 'react'
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
import './Experience.css'
import {motion} from 'framer-motion'

import { useSelector } from 'react-redux'

// animation fraamer motion
  const variants= {
     initial: {
      y:-300,
      opacity:0.1,
      scale:1.5
     },
     animate: {
      y:0,
      opacity:1,
      scale:1,
      transition:{
        duration:1.5,
        staggerChildren:0.1,
      }
     }
   }

   const variantsFront= {
     initial:{
        x:-200,
        opacity:0,
        scale:0.5
    },
    animate:{
        x:0,
         opacity:1,
         scale:1,
         transition:{
            duration:1,
            staggerChildren:0.1
         }
    }
   }
   const variantsBack= {
     initial:{
        x:200,
        opacity:0,
        scale:0.5
    },
    animate:{
        x:0,
         opacity:1,
         scale:1,
         transition:{
            duration:1,
            staggerChildren:0.1
         }
    }
   }
const Experience = () => {
     const theme=useSelector(state=>state.theme.isDark)
   
    
  return (
    <div className={`my-experience ${theme? "bgExperienceLight": "bgExperienceDark"}`} id="Experience">
         <motion.div className='experience-titre' variants={variants} initial="initial" whileInView="animate">
             <motion.p variants={variants}>Quelles sont mes compétences</motion.p>
             <motion.h1 variants={variants}>Mes Compétences</motion.h1>
             <motion.p className='descri' variants={variants}>
               Je n’ai pas beaucoup d’expériences mais j’ai une capacité d’adaptation, et j’apprends vite. 
                Néanmoins, je maîtrise déjà une bonne partie et je souhaite developer et exceller les autres compétences.
             </motion.p>
         </motion.div>
         <div className='experience-content'>
              <motion.div className={`front-content ${theme? "bg-white": "bgExpDark"}`} variants={variantsFront} initial="initial" whileInView="animate">
                   <h2 className={` ${theme? "dev-titreLight" : "dev-titreDark"}`} >Front-End </h2>
                   <FrontEnd />
              </motion.div>
              <motion.div className={`back-content ${theme? "bg-white": "bgExpDark"}`} variants={variantsBack} initial="initial" whileInView="animate">
                   <h2 className={` ${theme? "dev-titreLight" : "dev-titreDark"}`}>Back-End </h2>
                   <BackEnd />
              </motion.div>
         </div>
    </div>
  )
}

export default Experience
