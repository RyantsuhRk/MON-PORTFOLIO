import React ,{useEffect}from 'react'
import Avatar2 from '../../assets/profil2.jpg' 
import './About.css'
import { BiAward } from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'

//Animation Fade
import Aos from 'aos'
import 'aos/dist/aos.css'


const About = () => {

   useEffect(() => {
      Aos.init({duration: 3000})
     },[])

  return (
    <section className='About-container' id='About'>
       <p className='text-center'>Apprenez à Connaître</p>
       <h2 className='text-center titreApropos'>Apropos de Moi</h2>
       <div className='about-container '>
            <div className='width-avatar-class d-flex justify-content-center'>
                <div className='div-avatar' data-aos="fade-right" >
                 
                    <img src={Avatar2} alt='imj-avatar' className='avatar-image1'/>
    
               </div> 
            </div>
            <div className='about-div ' data-aos="fade-left">
                  <div className='experiences'>
                      <div className='d-flex justify-content-center'>
                        <div className='Experience text-center text-white'>
                            <BiAward className='iconAbout'/>
                            <h1 >Experience</h1>
                            <p>2ans et plus<br/> en Formations</p>
                        </div>
                      </div>
                      <div className='d-flex justify-content-center'>
                        <div className='Projet text-center text-white'>
                          <VscFolderLibrary className='iconAbout'/>
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
