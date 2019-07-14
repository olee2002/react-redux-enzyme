import React from 'react'
import './styles.scss'
import Logo from './../../assets/logo/logo.png'

export default function Header() {
   return (
      <header 
      className='headerComponent'
      data-test='headerComponent'
      >
         <div className='wrap'>
            <div className='logo'>
               <img data-test='logoIMG' src={Logo}></img>
            </div>
         </div>
      </header>
   )
}

