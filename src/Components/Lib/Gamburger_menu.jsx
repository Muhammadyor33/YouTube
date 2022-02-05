import React from 'react'
import { Context as ContextGamburger } from '../../Context/GamburgerMenu';

function GamburgerMenu ({color}) {

  const {burger, setBurger} = React.useContext(ContextGamburger)

  const GamMenu = function() {
    burger ? setBurger(!burger) : setBurger(!burger)
    console.log(burger)
  }

  return  (
      <>
          <svg className='me-4' onClick={GamMenu} width="20" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.6 3H1.4C.6 3 0 2.3 0 1.5S.6 0 1.4 0h17.2c.8 0 1.4.7 1.4 1.5S19.4 3 18.6 3ZM1.4 7h17.2c.8 0 1.4.7 1.4 1.5s-.6 1.5-1.4 1.5H1.4C.6 10 0 9.3 0 8.5S.6 7 1.4 7Zm17.2 7H1.4c-.8 0-1.4.7-1.4 1.5S.6 17 1.4 17h17.2c.8 0 1.4-.7 1.4-1.5s-.6-1.5-1.4-1.5Z" fill={color}/>
          </svg>
      </>
  )
}
export { GamburgerMenu }