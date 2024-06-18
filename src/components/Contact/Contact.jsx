import {useState,useEffect} from 'react'
import './Contact.css'
import { useRef} from 'react';
import emailjs from 'emailjs-com'
import { FaEnvelope, FaHome, FaPhoneSquare } from 'react-icons/fa';

//Animation Fade
import Aos from 'aos'
import 'aos/dist/aos.css'

const  Contact= () => {
  useEffect(() => {
    Aos.init({duration: 2000})
   },[])


  // EN utilisant useState
 /* const [details,setDetails] = useState({
    message:"",
    name:"",
    email:"",
    objet:"",
  });

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setDetails((det)=>{
       return{...det, [name]: value};
    });
  }
  const handleSubmit = (e)=>{
     e.preventDefault();
     e.target.reset();
     console.log(details);
  }
*/
// En utilisant UseRef

const form = useRef();

const sendEmail= (e) =>{
  e.preventDefault();

  emailjs.sendForm('Your_REVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')

  e.target.reset();
}


  return (
    <section className="contact" id="contact">
      <div className= 'w-100 '>
        <div className="titre">
          <h1 style={{color:"white"}}>Contactez-moi</h1>
           <div className='contact-description'>
              <p style={{marginTop:'50px',textAlign:'center'}}>Merci d’avoir visité mon message secret, je suis prêt à recevoir et à répondre à vos messages.</p>
           </div>
        </div>
        <div className='content-contact'>
           <div className='contenu-contact' id="contennu">
                <form className="formulaire-form" onSubmit={sendEmail} name="form" data-aos="fade-right">
                    <div className="formulaire-contact">
                        <textarea  name='message'  className="form-control textarea-form" placeholder="Votre message" required></textarea>
                        <div className='nom-mail' id="mail">
                            <input type="text" name="name" id="name"  placeholder="Votre Nom" className="form-control"  required/>
                            <input type="mail" name="email" id="mail"  placeholder="adresse E-mail" className="input-mail form-control "  required/>
                        </div>
                        <input type="text" name="objet"  placeholder="objet" className="form-control input-objet"  required/><br/>
                        
                    </div>
                    <button type="submit" className="btn-envoyer">
                        <span className='couche-btn-envoyer'></span>  
                        <span className="text-btn-envoyer">Envoyer</span>
                    </button>
                </form>
              
                  <div className='Adresse' id="Adresse" data-aos="fade-left">
                    <div className="Home-adress">
                           <div className="home-icon"><FaHome/></div>
                           <div className="region">
                                  <h5 style={{color:'white'}}><span>Antananarivo,</span><span className="mada">Madagascar</span></h5>
                                  <p className="arrondissement" >TANA 102</p>
                          </div>
                    </div>
                    <div className="Numero"> 
                        <div className="phone-icon"><FaPhoneSquare/></div>
                         <div id="num">
                               <h5 style={{color:'white'}}>034 51 517 31</h5>
                               <p >Toujours Disponible</p>
                                <h5 ><a href="tel:+261 34 51 517 31" className='lien' >Envoyer un Message</a></h5>
                        </div>
                    </div>
                   <div className="Email">
                        <div className="envelope-icon"><FaEnvelope /> </div>
                        <div id="mailto">
                              <h5 style={{color:'white'}} >riantsoark1309@gmail.com</h5>
                              <p >Toujours Disponible</p>
                              <h5 className="email" ><a href="mailto:riantsoark1309@gmail.com" className='lien'>Envoyer un Message</a></h5>
                       </div>
                   </div>
                  </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
