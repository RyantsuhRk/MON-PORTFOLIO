import React from 'react'
import { BackList1,BackList2 } from './BackList'


const BackEnd = () => {
  return (
    <div className='backEnd'>
        <ul className='p-0'>
            {BackList1.map((liste)=>
            <li key={liste.id} className='liste'>
               <div className='liste-modules d-flex'>
                  <h3>{liste.icon}</h3>
                  <h3 className='titre-module text-primary'>{liste.titre}</h3>
                </div>
                <div className='back-value'>
                    <p style={{
                      position:'absolute',
                      width:`${liste.value}%`,
                      height:'.8rem',
                      zIndex:4
                    }} className='pourcentage'>
                    </p>
                </div>
            </li>
                )}
        </ul>
        <ul className='p-0'>
            {BackList2.map((liste)=>
            <li key={liste.id} className='liste'>
              <div className='liste-modules d-flex'>
                <h3>{liste.icon}</h3>
                <h3 className='titre-module text-primary'>{liste.titre}</h3>
              </div>
              <div className='back-value'>
                    <p style={{
                      position:'absolute',
                      width:`${liste.value}%`,
                      height:'.8rem',
                      zIndex:4
                    }} className='pourcentage'>
                    </p>
              </div>
            </li>
                )}
        </ul>
    </div>
  )
}

export default BackEnd
