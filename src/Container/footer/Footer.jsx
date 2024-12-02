import React from 'react';
import logo1 from '../../assets/logos/logo1.webp';


import './footer.css'


function Footer() {
    return (
        <div className='gridFooter'>  
            <h3 className='pFooter' > Copyright 2024 - Agence-devcode</h3>
            <img  className='fixLogoAgence' src={logo1} alt="logo agence Devcode" />  
        </div>
    );
}
export default Footer;
