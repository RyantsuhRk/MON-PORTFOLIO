import React,{useEffect} from 'react'
import './Sidebar.css'
import { BiLogoGithub, BiLogoGoogle, BiLogoLinkedin } from 'react-icons/bi'

//Animation Fade
import Aos from 'aos'
import 'aos/dist/aos.css'


const Sidebar = () => {

   useEffect(() => {
      Aos.init({duration: 2000})
     },[])


  return (
            <div className='aside'  data-aos="fade-aside">
                <ul className='nav-list' >
                    <li className='nav-item'>
                       <a href="http://linkedin.www" className='nav-link '><BiLogoLinkedin className='logo'/></a>
                    </li>
                    <li className='nav-item'>
                       <a href="http://github.www" className='nav-link'><BiLogoGithub className='logo'/></a>
                    </li> 
                    <li className='nav-item'>
                       <a href="http://google.fr" className='nav-link'><BiLogoGoogle className='logo'/></a>
                    </li>
                    <li><p className='tiret-vertical' ></p></li>
                </ul>
            </div>
  )
}

export default Sidebar
