import {useState} from 'react'
import './HeaderSocial.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import { BiBook,BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'


// animation framer-motion


const HeaderSocial = () => {
   const [activeNav,setActiveNav]=useState("#Home")
   const theme=useSelector(state=>state.theme.isDark)

  return (
    <div className={`home-social ${theme? "bgSocialLight": "bgSocialDark"}`}>
        
         <a href="#Home" onClick={()=>setActiveNav('#Home')} className={activeNav==='#Home' ? 'active': ''}  >
            <AiOutlineHome/>
         </a>
         <a href="#About"  onClick={()=>setActiveNav('#About')} className={activeNav==='#About' ? 'active': ''}  >
            <AiOutlineUser/>
         </a>
         <a href="#Experience" onClick={()=>setActiveNav('#Experience')} className={activeNav==='#Experience' ? 'active': ''}  >
            <BiBook/>
         </a>
         <a href="#portfolio" onClick={()=>setActiveNav('#service')} className={activeNav==='#service' ? 'active': ''}  >
            <RiServiceLine/>
         </a>
         <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active': ''}  >
            <BiMessageSquareDetail/>
         </a>
    </div>
  )
}

export default HeaderSocial


