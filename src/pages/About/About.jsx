import React ,{useEffect}from 'react'
import Avatar2 from '../../assets/profil2.jpg' 
import './About.css'
import { BiAward } from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'
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


const About = () => {
   const theme= useSelector(state=>state.theme.isDark)
   useEffect(() => {
      Aos.init({duration: 3000})
     },[])

  return (
    <section className={`About-container ${theme? "bgAboutLight":"bgAboutDark"}`} >
       <motion.div className='container-about' variants={variants} initial="initial" whileInView="animate">
         <motion.p className='text-center' variants={variants}>Apprenez à Connaître</motion.p>
         <motion.h2 className='text-center titreApropos' variants={variants}>Apropos de Moi</motion.h2>
       </motion.div>
       <div className='about-container '>
            <div className='width-avatar-class d-flex justify-content-center'>
                <div className='div-avatar' data-aos="fade-right" >
                 
                    <img src={Avatar2} alt='imj-avatar' className='avatar-image1'/>
    
               </div> 
            </div>
            <div className='about-div ' data-aos="fade-left">
                  <div className='experiences'>
                      <div className='d-flex justify-content-center'>
                        <div className='Experience text-center text-white d-flex flex-col justify-center items-center'>
                            <BiAward className='size-12'/>
                            <h1 >Experience</h1>
                            <p>2ans et plus<br/> en Formations</p>
                        </div>
                      </div>
                      <div className='d-flex justify-content-center'>
                        <div className='Projet text-center  text-white d-flex flex-col justify-center items-center'>
                          <VscFolderLibrary className='size-12'/>
                          <h1>Projets</h1>
                          <p> plus de 10 <br/>projets </p>
                        </div>
                      </div>
                  </div>
                  <div className='description '>
                     <div className='textProjetExperience'>
                        <p style={{textAlign:'justify'}}>Toujours en pleine formation, et essayant chaque jour d'étudier et de s'améliorer afin de construire de nouveaux projets
                        </p>
                     
                        <a href='#contact' type="button" className="btn btn-letsTalk">
                             <span className='couche-btn-talk'></span>
                             <p className=' text-btn-talk mt-3'>Let's Talk</p>
                        </a>
                  
                     </div>
                  </div>
            </div>
            
       </div> 
    </section>
  )
}

export default About
