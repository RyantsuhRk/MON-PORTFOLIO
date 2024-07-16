import React,{useEffect} from 'react'
import './Portfolio.css'
import {ListProjets } from './ListProjet'
import {Button} from '@mui/material'
import { FaCogs, FaTags } from 'react-icons/fa'
import {motion} from 'framer-motion'


//Animation Fade
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useSelector } from 'react-redux'

// animation framer motion
const variants= {
  initial: {
   y:-200,
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


const Portfolio = () => {
  const theme=useSelector(state=>state.theme.isDark)
  useEffect(() => {
    Aos.init({duration: 2000})
   },[])

  return (
    <div className={ `portfolio ${theme? "bgPortfolioLight" :"bgPortFolioLight"}`} >
      <motion.div className='portfolio-titre' variants={variants} initial="initial" whileInView="animate">
        <motion.p variants={variants}>Mes Anciens Projects</motion.p> 
        <motion.h1 style={{color:'white'}} variants={variants}>Portfolio</motion.h1>
        <motion.p className='mt-4' variants={variants}>Voici quelques projet que j'ai été realiser</motion.p>
      </motion.div>
      <div className='cart' >
             <ul >
               {ListProjets.map((projet)=>
                  <li key={projet.id} className='cart1' data-aos={`${projet.id%2===1? 'fade-top': 'fade-bottom'}`}>
                    
                        <div className='content-cart1'>
                          <div className='image-porfolio'> 
                              <img src={projet.cover} alt={`${projet.index}`} className='imagePortfolioItem'/>
                          </div>
                          <div className='portfolio-content'>
                            <div className='portfolio-name ' variant='contained'> {projet.nom}</div>
                            <div className='portfolio-description'>
                               <p className='phrase-description'><FaTags style={{fontSize:'20px',color:"#4db5ff"}}/> {projet.desc}</p>
                               
                               <p className='phrase-technoUtiliser'><FaCogs style={{fontSize:'20px',color:"#4db5ff"}}/>{projet.techno}</p>
                            </div>
                            
                            <div className='buttonGroup'>
                                <Button variant='text' className='btn-voir-plus text-primary' >Voir plus</Button>
                                <Button variant='contained'>
                                   <a  href="http://github.com" className='github-btn'>
                                      Github
                                   </a>
                                </Button>   
                            </div>
                          </div>
                        </div>
                    
                    
                  </li>
               )}
             </ul>    
      </div>
    </div>  
  )
}

export default Portfolio
