import React,{useEffect} from 'react'
import Fond from '../../assets/moi6.png'
import HeaderSocial from './HeaderSocial'
import './Home.css'
import Sidebar from './Sidebar'
import ScrollDown from './ScrollDown'

//Animation Fade
import Aos from 'aos'
import 'aos/dist/aos.css'



const Home = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
       },[])

  return (
  <div className="home" id='Home' >
        <div className='home-details' data-aos="fade-bottom">
           <p className='titre-salutation text-center'>Bonjour, Je suis</p> 
           <h1 className='home-name '><span className='nom-R-class'>R</span>AKOTONJANAHARY </h1>
           <h2 className='home-username '><span className='nom-F-class'>F</span>anomezantsoa </h2>
           <p className='titre-poste' >Devellopeur Stagiaire ReactJS</p>
   
           <div className='btn-cv' >
                <a href="#" download className="btn btnCV " >
                     <span className='btn-cv-text'>Telecharger CV</span>
                     <span className='couche-btn-cv'></span>
                 </a> 
                 <a href='#contact' className='btnParlons btn'>
                 <span className='btn-parlons-text'>Parlons</span>
                     <span className='couche-btn-parlons'></span>
                 </a>
           </div> 
        </div>
    
    <div className='Home-page'>
        <div className='asideFade'>
            <Sidebar />
        </div>   
        <div className='scroll-composant' >
            <div className='container-image ' >
                <div className='image-fond' data-aos="fade-top">  
                   <img src={Fond} alt="img-logo"/>  
                </div> 
            </div>
            <HeaderSocial/> 
            <ScrollDown />
       </div>
    </div>
  </div>
  )
}

export default Home
