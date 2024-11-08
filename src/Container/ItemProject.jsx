
import pageohmyfood from '../assets/images/pageohmyfood.webp';
import pagekasa from '../assets/images/pagekasa.webp';
import pageargentbank from '../assets/images/pageargentbank.webp';
import backgroundImage from '../assets/images/fonddepage.webp';
import Bannerlogos from '../Components/Bannerlogos';

function ItemProject() {
    const handleClick = () => {
        console.log('Lien cliqué');
    };
    return (
        <div className="gridProjects" style={styles.gridProjects}>
            <h2 className="projectsTitle" style={styles.projectsTitle}>Quelques exemples de réalisations</h2>
            <Bannerlogos />
            <ul style={styles.ul}>
                <li style={styles.li}>
                    <div className='backView' style={{ ...styles.backView, backgroundImage: `url(${backgroundImage})` }}></div>
                    <h3 className="title" style={styles.title}>Oh my food</h3>
                    <p className="descriptionProject" style={styles.descriptionProject}>Réalisation d'un site responsive vitrine pour les cartes de divers restaurateurs</p>
                    <img src={pageohmyfood} alt="header projet" style={styles.imgbig}></img>
                    <a href='https://fredcentvin.github.io/projet4-ohmyfood/' target="_blank" rel="noopener noreferrer" onClick={handleClick} style={styles.a} >Visitez le site Oh my food</a>
                </li>
                <li style={styles.li}>
                    <div className='backView' style={{ ...styles.backView, backgroundImage: `url(${backgroundImage})` }}></div>
                    <h3 className="title" style={styles.title}>Kasa</h3>
                    <p className="descriptionProject" style={styles.descriptionProject}>Site responsive pour de la location d'appartements entre particuliers</p>
                    <img src={pagekasa} alt="page d'accueil kasa" style={styles.img}></img>
                </li>
                <li style={styles.li}>
                    <div className='backView' style={{ ...styles.backView, backgroundImage: `url(${backgroundImage})` }}></div>
                    <h3 className="title" style={styles.title}>ArgenBank</h3>
                    <p className="descriptionProject" style={styles.descriptionProject}>Façonnage du site d'une banque en ligne utilisant Redux</p>
                    <img src={pageargentbank} alt="profil de frédéric" style={styles.img}></img>
                </li>
            </ul>
        </div>
    );
}

const styles = {
    gridProjects: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px',
    },
    ul: {
        display: 'flex',
        flexDirection: 'row',
        gap: '50px',
        paddingInlineStart: '0'
    },
    li: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
        height: '400px',
        border: '2px solid #ccc',
        borderRadius: '50%',
        position: 'relative', 
        overflow: 'hidden' ,
        
    },
    backView: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        opacity: '0.7',
        zIndex: '-1'
    },
    projectsTitle: {
        fontSize: '22px',
        alignItems: 'center',
        color:'#3498db',
        marginBottom:'0'
    },
    title: {
        color: 'white',
        fontSize: '18px'
    },
    img: {
        objectFit: 'cover',
        maxWidth: '400px'
    },
    imgbig: {
        width: '320px',
        height: 'auto'
    },
    descriptionProject: {
        display: 'flex',
        fontSize: '12px',
        paddingLeft: '50px',
        paddingRight: '40px',
        color:'white',
        fontWeight:'700'
    },
    a:{
        color:'white',
        textDecoration:'underline',
        cursor:'pointer'
    }
};

export default ItemProject;
