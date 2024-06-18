import React,{useEffect} from 'react'
import './Portfolio.css'
import {ListProjets } from './ListProjet'
import {Button} from '@mui/material'
import { FaCogs, FaTags } from 'react-icons/fa'


//Animation Fade
import Aos from 'aos'
import 'aos/dist/aos.css'


const Portfolio = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
   },[])

  return (
    <div className='portfolio' id="portfolio">
      <div className='portfolio-titre'>
        <p>Mes Anciens Projects</p> 
        <h1 style={{color:'white'}}>Portfolio</h1>
        <p className='mt-4'>Voici quelques projet que j'ai été realiser</p>
      </div>
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
