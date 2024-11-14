import React from 'react';
import ItemBio from '../Container/itemBio/ItemBio.jsx';
import ItemProject from '../Container/itemProject/ItemProject.jsx';
import backgroundImage from '../assets/images/fonddepage.webp';

function Home() {
    return (
        <div>
            <div className='backView' style={styles.backView}>
                <div style={styles.backgroundOverlay}></div>
                <ItemBio />
            </div>
            <div id="projects" className='blockItem' style={styles.blockItem}>
                <ItemProject />
            </div>
        </div>
    );
}

const styles = {
    backView: {
        display:'flex',
        position: 'relative',
        zIndex: '0',
    },
    backgroundOverlay: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '45% 100%',
        backgroundRepeat: 'no-repeat',
        opacity: '0.3',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: '-1',
    },
    blockItem: {
        background: '#cad0d5',
        position: 'relative',
        zIndex: '1'
    },
    '@media (max-width: 358px)':{
        backView:{
            flexDirection:'row'
        }

    }
};

export default Home;


