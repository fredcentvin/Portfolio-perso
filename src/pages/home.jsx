import React from 'react';
import Itembio from '../Container/Itembio.jsx';
import backgroundImage from '../assets/images/fonddepage.webp'; // Mettez le bon chemin vers votre image

function Home() {
    return (
        <div className='backView' style={{ ...styles.backView, backgroundImage: `url(${backgroundImage})` }}>
            <Itembio />
        </div>
    );
}

const styles = {
    backView: {
        backgroundImage:'url(../assets/images/fonddepage.webp)',
        backgroundSize: 'cover', // Pour couvrir tout l'élément
        opacity:'0.5',
        zIndex:'-1'  
    },
    
};

export default Home;
