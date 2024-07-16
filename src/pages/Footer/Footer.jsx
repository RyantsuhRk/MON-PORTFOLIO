import React from 'react'
import './Footer.css'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import {motion} from 'framer-motion'

const variants= {
  initial: {
   x:300,
   opacity:0
  },
  animate: {
   x:0,
   opacity:1,
   transition:{
     duration:1,
     staggerChildren:0.1,
   }
  }
}

const reSeauVariants= {
  initial: {
   scale:3,
   opacity:0
  },
  animate: {
   scale:1,
   opacity:1,
   transition:{
     duration:1,
     staggerChildren:0.3,
   }
  }
}

const Footer = () => {
  const theme=useSelector(state=>state.theme.isDark)
  const dispatch=useDispatch()

  return (
    <div className={`${theme? "footerLight": "footerDark"}`}>
        <div className='footer-container'>
            <motion.div className='footer-home' variants={variants} initial="initial" whileInView="animate">
               <motion.a href="#Home" className='btn' variants={variants}>Home</motion.a>
               <motion.a href="#About" className='btn' variants={variants}>About</motion.a>
               <motion.a href="#Experience" className='btn' variants={variants}>Experience</motion.a>
               <motion.a href="#portfolio" className='btn' variants={variants}>Portfolio</motion.a>
               <motion.a href="#contact" className='btn' variants={variants}>Contact</motion.a> 
            </motion.div>
            <motion.div className='reseaux' variants={reSeauVariants} initial="initial" whileInView="animate">
               <motion.a href="http://facebook.com"><BiLogoFacebook className='icon-footer icon-facebook'/></motion.a>
               <motion.a href="http://facebook.com"><BiLogoTwitter className='icon-footer icon-twiter'/></motion.a>
               <motion.a href="http://youtube.com"><BiLogoYoutube className='icon-footer icon-youtube'/></motion.a>
               <motion.a href="http://facebook.com"><BiLogoInstagram className='icon-footer icon-instagram'/></motion.a>
            </motion.div>
        </div>
        <div className='copyring'><p>&copy; Portfolio copyring in 2024</p></div>
    </div>     
  )
}

export default Footer
