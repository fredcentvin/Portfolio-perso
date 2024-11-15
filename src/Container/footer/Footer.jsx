import React from 'react';
import logo1 from '../../assets/logos/logo1.webp';


import './footer.css'


function Footer() {
    return (
        <div className='gridFooter'>
           
            <p className='pFooter' > Copyright 2024 - Frédéric Boniface</p>
            <img  className='fixLogoAgence' src={logo1} alt="logo agence" />
        </div>
    );
}

// const styles = {
//     div: {
//         fontFamily:'Righteous',
//         textAlign: 'center',
//         fontSize: '16px',
//         color: '#2c3e50',
//         borderTop: "2px solid #ccc"
//     },
//     img: {
//         width: '60px',
//         height: 'auto'
//     },
//     icon:{
//         width:'24px',
//         height:'24px',
//         marginTop:'15px'
//     },
//     '@media (max-width: 400px)':{
//     div:{
//         alignItems:'center'
//     }
//     }
// };

export default Footer;
