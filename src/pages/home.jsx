import React from 'react';
import ItemBio from '../Container/ItemBio.jsx';
import ItemProject from '../Container/ItemProject.jsx';
import backgroundImage from '../assets/images/fonddepage.webp';

function Home() {
    return (
        <div>
            <div className='backView' style={{ ...styles.backView, backgroundImage: `url(${backgroundImage})` }}>
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
        backgroundImage: 'url(../assets/images/fonddepage.webp)',
        backgroundSize: 'cover',
        opacity: '0.8',
        zIndex: '0',
    },
    blockItem: {
        background: 'lightgrey',
        position: 'relative',
        zIndex: '1'
    }
};

export default Home;

