import React from 'react';
import logo1 from '../assets/images/logos/logo1.webp';


function Logo() {
    return(
        <div>        
            <img src={logo1} alt="logo agence" style={styles.img}></img>   
        </div>
    )
}
const styles= {
    img : {
        height:'90px',
        marginLeft:'10px'
    }
}
export default Logo