import React from 'react'
import { FrontList1,FrontList2} from './FontList'


const FrontEnd = () => {
  return (
    <div className='frontEnd'>
          <ul className='p-0'>
             {FrontList1.map((liste)=>
              <li key={liste.id} className='liste'>
                <div className='liste-modules d-flex'>
                       <h3>{liste.icon}</h3>
                       <h3 className='titre-module text-primary'>{liste.titre}</h3>
                </div>
                <div className='front-value'>
                  <p style={{
                    position:'absolute',
                    width:`${liste.value}%`,
                    height:'.8rem',
                    zIndex:4
                  }} className='pourcentage'></p>
                </div>
             </li>
            )}
          </ul>
      
          <ul className='p-0'>
             {FrontList2.map((liste)=>
              <li key={liste.id} className='liste'>
                <div className='liste-modules d-flex'>
                     <h3>{liste.icon}</h3>
                     <h3 className='titre-module text-primary'>{liste.titre}</h3>
                </div>
                <div className='front-value'>
                  <p style={{
                    position:'absolute',
                    width:`${liste.value}%`,
                    height:'.8rem',
                    zIndex:4
                  }} className='pourcentage'></p>
                </div>
             </li>
            )}
          </ul> 
    </div>
  )
}

export default FrontEnd
