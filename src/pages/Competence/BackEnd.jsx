import React from 'react'
import { BackList1,BackList2 } from './BackList'
import { useSelector } from 'react-redux'


const BackEnd = () => {
  const theme=useSelector(state=>state.theme.isDark)
   
  return (
    <div className='backEnd'>
        <ul className='p-0'>
            {BackList1.map((liste)=>
            <li key={liste.id} className='liste'>
               <div className='liste-modules d-flex'>
                  <h3 >{liste.icon}</h3>
                  <h4 className={`titre-module ${theme? "text-primary": "text-white"}`}>{liste.titre}</h4>
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
                <h4 className={`titre-module ${theme? "text-primary": "text-white"}`}>{liste.titre}</h4>
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
