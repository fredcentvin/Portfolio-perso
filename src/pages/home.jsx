import React from 'react';
import Dcbio from '../Container/dcbio/dcbio.jsx';
import backgroundImage from '../assets/images/fonddepagecoupe.webp';
import {Helmet} from 'react-helmet';

function Home() {
    return (
        <div>
            <Helmet>
                <title>home - Agence DevCode</title>
                 <link rel="canonical" href="https://www.agence-devcode.fr/home" />
            </Helmet>
            <div className='backViewDc' style={styles.backViewDc}>
                <div style={styles.backgroundOverlay}></div>
            
                <Dcbio />
                </div>
          
        </div>
    );
}

const styles = {
    backViewDc: {
        position: 'relative',
        zIndex: '0',
    },
    backgroundOverlay: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '45% 100%',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: '-1',
    },
    blockItem: {
        background: '#484d51',
        position: 'relative',
        zIndex: '1'
    },
    '@media (max-width: 358px)':{
        backViewDc:{
            flexDirection:'row'
        }

    }
};

export default Home;


