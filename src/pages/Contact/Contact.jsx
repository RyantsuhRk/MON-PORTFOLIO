import {useState,useEffect,useRef} from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'
import { FaEnvelope, FaHome, FaPhoneSquare } from 'react-icons/fa';
import {delay, motion, useInView} from 'framer-motion'

//Animation Fade
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useSelector } from 'react-redux';

// animation fraamer motion
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

const Adressvariants= {
  initial: {
   x:300,
   opacity:0,
  },
  animate: {
   x:0,
   opacity:1,
   transition:{
     duration:0.5,
     staggerChildren:0.2,
   }
  }
}

const  Contact= () => {
  const theme=useSelector(state=>state.theme.isDark)
  useEffect(() => {
    Aos.init({duration: 2000})
   },[])

// En utilisant UseRef

const form = useRef();

const sendEmail= (e) =>{
  e.preventDefault();

  emailjs.sendForm('service_96ywvqi', 'template_keb934i', form.current, 'YOUR_USER_ID')

  e.target.reset();
}

const isInView=useInView(form, {margin: "-100px"})

  return (
    <motion.section  className={`contact ${theme? "bgContactLight" : "bgContactDark"}`} >
      <div className= 'w-100 '>
        <motion.div className="titre" variants={variants} initial="initial" whileInView="animate">
          <motion.h1 style={{color:"white"}} variants={variants}>Contactez-moi</motion.h1>
           <motion.div className='contact-description' variants={variants}>
              <motion.p style={{marginTop:'50px',textAlign:'center'}}>Merci d’avoir visité mon message secret, je suis prêt à recevoir et à répondre à vos messages.</motion.p>
           </motion.div>
        </motion.div>
        <div className='content-contact'>
           <div className='contenu-contact' id="contennu">
              <div className="formContainer">
                <motion.div 
                  className="phoneSvg"
                  initial={{opacity:1}} 
                  whileInView={{opacity:0}}
                  transition={{delay:3, duration:1}}
                  >
                  <svg width="400px" height="380px" viewBox="0 0 32.667 32.667" >
                    <motion.path 
                      strokeWidth={0.5}
                      fill='none'
                      initial={{pathLength:0}}
                      animate={isInView && {pathLength:.5}}
                      transition={{duration:3}}
                      d="M19.373 11.831c-0.138-0.154-0.337-0.25-0.559-0.25-0.414 0-0.75 0.336-0.75 0.75 0 0.195 0.074 0.373 0.197 0.506l-0-0.001c0.819 0.92 1.32 2.139 1.32 3.476 0 1.602-0.719 3.035-1.852 3.996l-0.008 0.006c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.395-0.084 0.531-0.22v0c1.396-1.251 2.27-3.060 2.27-5.072 0-1.717-0.636-3.285-1.685-4.481l0.007 0.008zM22.428 8.776c-0.138-0.152-0.336-0.247-0.557-0.247-0.414 0-0.75 0.336-0.75 0.75 0 0.194 0.073 0.37 0.194 0.503l-0.001-0.001c1.445 1.629 2.328 3.786 2.328 6.149 0 2.819-1.256 5.345-3.24 7.047l-0.012 0.010c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.395-0.084 0.531-0.22v0c2.244-2.002 3.65-4.901 3.65-8.129 0-2.741-1.014-5.245-2.686-7.158l0.011 0.013zM25.273 5.524c-0.137-0.146-0.331-0.236-0.546-0.236-0.414 0-0.75 0.336-0.75 0.75 0 0.198 0.077 0.378 0.202 0.512l-0-0c2.215 2.36 3.575 5.544 3.575 9.046 0 3.986-1.763 7.561-4.551 9.986l-0.016 0.014c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.395-0.084 0.531-0.22v0c10.635-10.637 1.121-21.030 1.023-21.134zM12.378 11.725c0 0 0 0 0 0 0.248 0 0.469-0.121 0.605-0.307l0.001-0.002 4.282-5.897c0.090-0.122 0.143-0.275 0.143-0.44 0-0.064-0.008-0.127-0.023-0.187l0.001 0.005c-0.141-0.532-0.367-0.997-0.664-1.407l0.008 0.012c-0.178-0.272-0.374-0.509-0.593-0.723l-0.001-0.001-0.004-0.004c-0.952-0.94-2.261-1.52-3.706-1.52-1.446 0-2.757 0.582-3.71 1.524l0-0c-3.379 3.386-5.468 8.060-5.468 13.222s2.089 9.836 5.469 13.222l-0-0c0.943 0.942 2.245 1.525 3.683 1.525 0.006 0 0.012 0 0.018-0h-0.001c0.003 0 0.007 0 0.010 0 1.445 0 2.754-0.581 3.706-1.522l-0.001 0c0.211-0.203 0.399-0.427 0.56-0.671l0.009-0.015c0.301-0.408 0.536-0.886 0.676-1.404l0.007-0.030c0.014-0.055 0.022-0.117 0.022-0.182 0-0.166-0.054-0.319-0.145-0.443l0.001 0.002-4.282-5.899c-0.138-0.188-0.358-0.309-0.606-0.309v0c-0.798 0.001-1.553 0.187-2.224 0.517l0.030-0.013c-0.599-1.412-0.948-3.055-0.948-4.779s0.348-3.367 0.979-4.862l-0.031 0.082c0.641 0.317 1.396 0.502 2.194 0.504h0.001zM9.652 9.428c-0.216 0.057-0.39 0.202-0.485 0.393l-0.002 0.004c-0.902 1.802-1.43 3.927-1.43 6.174s0.528 4.372 1.467 6.256l-0.037-0.081c0.097 0.195 0.271 0.34 0.481 0.397l0.005 0.001c0.055 0.014 0.118 0.022 0.183 0.022 0.162 0 0.313-0.050 0.438-0.135l-0.003 0.002c0.489-0.351 1.081-0.589 1.723-0.664l0.017-0.002 3.818 5.26c-0.108 0.249-0.232 0.464-0.377 0.662l0.007-0.009c-0.113 0.17-0.237 0.317-0.375 0.45l-0.001 0.001c-0.681 0.674-1.618 1.091-2.652 1.091s-1.969-0.416-2.65-1.089l0 0c-3.108-3.114-5.030-7.413-5.030-12.161s1.922-9.047 5.030-12.161l-0 0c0.673-0.671 1.601-1.086 2.626-1.086 0.005 0 0.010 0 0.014 0h-0.001c0.002 0 0.004 0 0.006 0 1.034 0 1.972 0.415 2.655 1.088l-0-0c0.15 0.146 0.284 0.308 0.399 0.483l0.007 0.011c0.129 0.177 0.244 0.378 0.335 0.592l0.008 0.020-3.818 5.259c-0.659-0.076-1.251-0.315-1.75-0.674l0.011 0.008c-0.12-0.085-0.268-0.136-0.429-0.136-0.067 0-0.132 0.009-0.194 0.025l0.005-0.001z" >
                    </motion.path>
                  </svg>
                </motion.div>
                <motion.form 
                  ref={form} 
                  className="formulaire-form" 
                  onSubmit={sendEmail} 
                  name="form" 
                  initial={{opacity:0}} 
                  whileInView={{opacity:1}}
                  transition={{delay:4, duration:1}}
                  >
                    <div className="formulaire-contact">
                        <textarea  name='message'  className="form-control textarea-form" placeholder="Votre message" required></textarea>
                        <div className='nom-mail' id="mail">
                            <input type="text" name="name" id="name"  placeholder="Votre Nom" className="form-control"  required/>
                            <input type="mail" name="email" id="mail"  placeholder="adresse E-mail" className="input-mail form-control "  required/>
                        </div>
                        <input type="text" name="objet"  placeholder="objet" className="form-control input-objet"  required/><br/>
                        
                    </div>
                    <button type="submit" className="btn-envoyer" >
                        <span className='couche-btn-envoyer'></span>  
                        <span className="text-btn-envoyer">Envoyer</span>
                    </button>
                </motion.form>
              </div>
              <motion.div className='Adresse' id="Adresse" data-aos="fade-left" variants={Adressvariants} initial="initial" whileInView="animate">
                    <motion.div className="Home-adress" variants={Adressvariants}>
                           <motion.div className="home-icon" variants={Adressvariants}><FaHome/></motion.div>
                           <div className="region">
                              <motion.h5 style={{color:'white'}} variants={Adressvariants}>Antananarivo,Madagascar</motion.h5>
                              <motion.p className="arrondissement" variants={Adressvariants}>TANA 102</motion.p>
                          </div>
                    </motion.div>
                    <motion.div className="Numero"> 
                        <motion.div className="phone-icon" variants={Adressvariants}><FaPhoneSquare/></motion.div>
                         <div id="num">
                            <motion.h5 style={{color:'white'}} variants={Adressvariants}>034 51 517 31</motion.h5>
                            <motion.p variants={Adressvariants}>Toujours Disponible</motion.p>
                            <motion.h5  variants={Adressvariants}><a href="tel:+261 34 51 517 31" className='lien' >Envoyer un Message</a></motion.h5>
                        </div>
                    </motion.div>
                   <motion.div className="Email">
                        <motion.div className="envelope-icon" variants={Adressvariants}><FaEnvelope /> </motion.div>
                        <motion.div id="mailto">
                              <motion.h5 style={{color:'white'}} variants={Adressvariants}>riantsoark1309@gmail.com</motion.h5>
                              <motion.p variants={Adressvariants}>Toujours Disponible</motion.p>
                              <motion.h5 className="email" variants={Adressvariants}><a href="mailto:riantsoark1309@gmail.com" className='lien'>Envoyer un Message</a></motion.h5>
                       </motion.div>
                   </motion.div>
              </motion.div>
            </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
