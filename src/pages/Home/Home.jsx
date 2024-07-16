import React,{useEffect} from 'react'
import Fond from '../../assets/moi6.png'
import HeaderSocial from './HeaderSocial'
import './Home.css'
import Sidebar from './Sidebar'
import ScrollDown from './ScrollDown'
import {motion} from 'framer-motion'

//Animation Fade
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useSelector } from 'react-redux'

// animation motion
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
       duration:1,
       staggerChildren:0.3,
     }
    }
 }

const imageVariants= {
    initial: {
   scale:0,
   opacity:0,
   rotate:"760deg"
  },
  animate: {
   scale:1,
   opacity:1,
   rotate:"0deg",
   transition:{
     duration:1,
   }
  }
}

const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
         transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
         }
    }
}

const Home = () => {
    const theme=useSelector(state=>state.theme.isDark)
    useEffect(() => {
        Aos.init({duration: 2000})
       },[])

  return (
  <div className={`home ${theme? "bgHomeLight":"bgHomeDark"}`}  >
        <motion.div className='home-details'   variants={variants} initial="initial" whileInView="animate" >
           <motion.p className='titre-salutation text-center' variants={variants} >Bonjour, Je suis</motion.p> 
           <motion.h1 className='home-name ' variants={variants}><span className='nom-R-class' variants={variants} >R</span>AKOTONJANAHARY </motion.h1>
           <motion.h2 className='home-username ' variants={variants}><span className='nom-F-class' variants={variants} >F</span>anomezantsoa </motion.h2>
           <motion.p className='titre-poste font-bold'  variants={variants} >Devellopeur FullStack JS</motion.p>
   
           <motion.div className='btn-cv' variants={variants}>
                <a href="#" download className="btn btnCV " >
                     <span className='btn-cv-text'>Telecharger CV</span>
                     <span className='couche-btn-cv'></span>
                 </a> 
                 <a href='#contact' className='btnParlons btn'>
                 <span className='btn-parlons-text'>Parlons</span>
                     <span className='couche-btn-parlons'></span>
                 </a>
           </motion.div> 
        </motion.div>
    
    <div className='Home-page '>
        <div className='asideFade'>
            <Sidebar />
        </div>   
        <div className='scroll-composant' >
            <div className='container-image '  > 
                  <motion.div className={`image-fond cursor-pointer ${theme? "bgImagelight":"bgImageDark"}`}  variants={imageVariants} initial="initial" whileInView="animate">  
                     <motion.img src={Fond} alt="img-logo" variants={imageVariants}/>  
                  </motion.div> 
            </div>
            <HeaderSocial/> 
            <ScrollDown />
       </div>
    </div>
    <motion.div className="slidingTextContainer " variants={sliderVariants} initial="initial" animate="animate">
            writer Content creator Influencer
    </motion.div>
  </div>
  )
}

export default Home
