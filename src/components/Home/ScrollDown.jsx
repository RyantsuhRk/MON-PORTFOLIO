import React, { useEffect } from 'react'
import './ScrollDown.css'

//Animation Fade
import Aos from 'aos'
import 'aos/dist/aos.css'

const ScrollDown = () => {

  useEffect(() => {
    Aos.init({duration: 3000})
   },[])

  return (
    <div className='contenu-scroll'  data-aos="fade-left">
           <a href='#About' className='mouse-wrapper'>
               Scroll Down
           </a>
     </div>  
  )
}

export default ScrollDown
