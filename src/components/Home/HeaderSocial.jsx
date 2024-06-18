import {useState} from 'react'
import './HeaderSocial.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import { BiBook,BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const HeaderSocial = () => {
   const [activeNav,setActiveNav]=useState("#Home")

  return (
    <div className='home-social' >
        
         <a href="#Home" onClick={()=>setActiveNav('#Home')} className={activeNav==='#Home' ? 'active': ''}>
            <AiOutlineHome/>
         </a>
         <a href="#About"  onClick={()=>setActiveNav('#About')} className={activeNav==='#About' ? 'active': ''}>
            <AiOutlineUser/>
         </a>
         <a href="#Experience" onClick={()=>setActiveNav('#Experience')} className={activeNav==='#Experience' ? 'active': ''}>
            <BiBook/>
         </a>
         <a href="#portfolio" onClick={()=>setActiveNav('#service')} className={activeNav==='#service' ? 'active': ''}>
            <RiServiceLine/>
         </a>
         <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active': ''}>
            <BiMessageSquareDetail/>
         </a>
    </div>
  )
}

export default HeaderSocial


