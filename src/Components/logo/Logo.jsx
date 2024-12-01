import React from 'react';
import logo1 from '../../assets/logos/logo1.webp';
import './logo.css';

const Logo = () => {
    return (
        <div className='gridLogoHeader' >
            <a href="/">
                <img className='fixLogo' src={logo1} alt="logo agence Devcode" />
            </a>
        </div>
    );
};

export default Logo;
