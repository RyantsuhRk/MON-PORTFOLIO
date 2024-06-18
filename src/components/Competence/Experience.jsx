import React,{useEffect} from 'react'
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
import './Experience.css'

//Animation Fade
import Aos from 'aos'
import 'aos/dist/aos.css'

const Experience = () => {

     useEffect(() => {
          Aos.init({duration: 2000})
         },[])
    
  return (
    <div className='my-experience' id="Experience">
         <div className='experience-titre'>
             <p>Quelles sont mes compétences</p>
             <h1>Mes Compétences</h1>
             <p className='descri'>
             Je n’ai pas beaucoup d’expériences mais j’ai une capacité d’adaptation, et j’apprends vite. 
Néanmoins, je maîtrise déjà une bonne partie et je souhaite developer et exceller les autres compétences.
             </p>
         </div>
         <div className='experience-content'>
              <div className='front-content' data-aos="fade-right">
                   <h2 className='dev-titre'>Front-End </h2>
                   <FrontEnd />
              </div>
              <div className='back-content' data-aos="fade-left">
                   <h2 className='dev-titre'>Back-End </h2>
                   <BackEnd />
              </div>
         </div>
    </div>
  )
}

export default Experience
