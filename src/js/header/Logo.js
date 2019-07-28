import React from 'react';
import { Link } from 'react-router-dom';

const Logo = (props) => (
   <div className="header-main__logo">
     <Link to="/">
       <h1>
         <img src="img/header-logo.png" alt="logotype" onClick={() => props.hidePanel()}/>
       </h1>
     </Link>
     <p>Обувь и аксессуары для всей семьи</p>
   </div>
) ;        

export default Logo;