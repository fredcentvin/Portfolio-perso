import ItemBio from "../Container/itemBio/ItemBio";
import backgroundImage from '../assets/images/fonddepagecoupe.webp';


function Apropos() {
    return (
        <div>
            <div className='backView' style={styles.backView}>
                <div style={styles.backgroundOverlay}></div>
                <ItemBio />
            
            </div>
            <div id="projects" className='blockItem' style={styles.blockItem}>
                
            </div>
        </div>
    );
}

const styles = {
    backView: {
        display: 'flex',
        position: 'relative',
        zIndex: '0',
    },
    backgroundOverlay: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '45% 100%',
        backgroundRepeat: 'no-repeat',
        opacity: '0.8',
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
        zIndex: '1',
    },
    
};

export default Apropos;
