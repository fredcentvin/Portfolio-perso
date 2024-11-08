import React from 'react';
import Itembio from '../Container/Itembio.jsx';
import ItemProjects from '../Container/ItemProject.jsx';
import backgroundImage from '../assets/images/fonddepage.webp';


function Home() {
    return (
        <div>
            <div className='backView' style={{ ...styles.backView, backgroundImage: `url(${backgroundImage})` }}>
                <Itembio />
            </div>
            <div className='blockItem' style={styles.blockItem} >
                <ItemProjects />
               
            </div>
        </div>
    );
}

const styles = {
    backView: {
        backgroundImage:'url(../assets/images/fonddepage.webp)',
        backgroundSize: 'cover', 
        opacity:'0.8',
        zIndex:'0',
    },
    blockItem:{
        background:'lightgrey',
        position:'relative',
        zIndex:'1'
    }
    
};

export default Home;
