import React from 'react'
import {Link} from 'react-router-dom';
export default function Comicbar() {
  return (
   
      <nav className="menu">
           <li href="#" className="menu__link">home</li>
           <Link to='/Comiclist' className="menu__link menu__link--marvel">marvel comics</Link>
           <li href="#" className="menu__link menu__link--dc">dc comics</li>
           <Link to='/Register'className="menu__link">register</Link>
           <li href="#" className="menu__link">novedades</li>
           <li href="#" className="menu__link">shop</li>
           
      </nav>
  

  
  )
}
