import React from 'react'
import './Header.css'

export const Header = () => {
     return ( 
          <>
          <div>
               <header onClick={()=>window.scroll(0,0)} className='header'>
                    Entertaintment
               </header>
          </div>
          </>
      );
}
