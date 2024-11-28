import React from 'react';
import logo1 from '../../assets/logos/logo1.webp';


import './footer.css'


function Footer() {
    return (
        <div className='gridFooter'>  
            <p className='pFooter' > Copyright 2024 - Agence-devcode</p>
            <img  className='fixLogoAgence' src={logo1} alt="logo agence" />  
        </div>
    );
}
export default Footer;
