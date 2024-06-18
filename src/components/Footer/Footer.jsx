import React from 'react'
import './Footer.css'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-home'>
               <a href="#Home" className='btn'>Home</a>
               <a href="#About" className='btn'>About</a>
               <a href="#Experience" className='btn'>Experience</a>
               <a href="#portfolio" className='btn'>Portfolio</a>
               <a href="#contact" className='btn'>Contact</a> 
            </div>
            <div className='reseaux'>
               <a href="http://facebook.com"><BiLogoFacebook className='icon-footer icon-facebook'/></a>
               <a href="http://facebook.com"><BiLogoTwitter className='icon-footer icon-twiter'/></a>
               <a href="http://youtube.com"><BiLogoYoutube className='icon-footer icon-youtube'/></a>
               <a href="http://facebook.com"><BiLogoInstagram className='icon-footer icon-instagram'/></a>
            </div>
        </div>
        <div className='copyring'><p>&copy; Portfolio copyring in 2024</p></div>
    </div>     
  )
}

export default Footer
