import React from 'react'
import './styles.scss'
import Logo from './../../assets/logo/logo.png'

export default function Header() {
   return (
      <header>
         <div className='wrap'>
            <div className='logo'>
               <img src={Logo}></img>
            </div>
         </div>
      </header>
   )
}

