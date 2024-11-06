import React from 'react';
import logo1 from '../assets/logos/logo1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div style={styles.div}>
            <FontAwesomeIcon icon={faCopyright} style={styles.icon}  />
            <p>Copyright 2024 Frédéric Boniface</p>
            <img src={logo1} alt="logo agence" style={styles.img} />
        </div>
    );
}

const styles = {
    div: {
        textAlign: 'center',
        fontSize: '16px',
        color: '#2c3e50',
        borderTop: "2px solid #ccc"
    },
    img: {
        width: '60px',
        height: 'auto'
    },
    icon:{
        width:'24px',
        height:'24px',
        marginTop:'15px'
    }
};

export default Footer;
