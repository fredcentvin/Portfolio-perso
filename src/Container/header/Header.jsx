import React from "react";
import Logo from '../../Components/logo/Logo';
import Nav from "../../Components/nav/Nav"
import './header.css'

function Header() {
    return(
    <div className="Gridheader">
        <Logo className='logoHeader' />
        <h1>AGENCE DE DEVELOPPEMENT WEB</h1>
        <Nav />
    </div> 
    )
}
export default Header;