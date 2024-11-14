import React, { useState } from 'react';
import { motion } from 'framer-motion';
import pageohmyfood from '../../assets/images/pageohmyfood.webp';
import pagekasa from '../../assets/images/pagekasa.webp';
import pageargentbank from '../../assets/images/pageargentbank.webp';
import pagePrintit from '../../assets/images/pagePrintit.webp';
// import backgroundImage from '../assets/images/fonddepage.webp';
import Bannerlogos from '../../Components/bannerLogos/Bannerlogos';
import './itemProject.css'

function ItemProject() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            title: "Oh my food",
            description: "Réalisation d'un site responsive vitrine pour les cartes de divers restaurateurs en utilisant SASS, et intégrant quelques animations",
            img: pageohmyfood,
            link: 'https://fredcentvin.github.io/projet4-ohmyfood/'
        },
        {
            title: "Kasa",
            description: "Site responsive pour de la location d'appartements entre particuliers utilisant React",
            img: pagekasa
        },
        {
            title: "ArgentBank",
            description: "Façonnage du site d'une banque en ligne utilisant React, Redux, ainsi que de l'identification auprès du serveur avec un token et utilisation de la méthode CRUD",
            img: pageargentbank
        },
        {
            title: "Print it",
            description: "Création du site d'une société familiale d'impression en utilisant javascript pour l'animation d'un carrousel",
            img: pagePrintit,
            link: "https://fredcentvin.github.io/Projet5-Print-it/"
        }
    ];

    const handleProjectClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="gridProjects">
            <h2 className="projectsTitle">Quelques exemples de réalisations</h2>
            <div className="projectsContainer">
                {projects.map((project, index) => (
                   <motion.div key={index} className={`projectCircle ${currentIndex === index ? 'selectedCircle' : ''}`} onClick={() => handleProjectClick(index)} whileHover={{ scale: 1.1 }} > 
                   <img className='circleImage' src={project.img} alt={`Projet ${project.title}`} /> 
                   </motion.div>
                ))}
            </div>
            <div className="projectDetail">
                <motion.div
                    className="largeCircle"
                    animate={{ scale: 1.2 }}
                >
                    <img className='circleImage' src={projects[currentIndex].img} alt={`Projet ${projects[currentIndex].title}`} />
                </motion.div>
                <motion.div
                    className="infoCircle"
                    animate={{ scale: 1.2 }}
                >
                    <div className='projectContent'>
                        <h3 className="title">{projects[currentIndex].title}</h3>
                        <p className="description">{projects[currentIndex].description}</p>
                        {projects[currentIndex].link && (
                            <a className="designLink" href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                                Visitez le site {projects[currentIndex].title}
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>
            <Bannerlogos />
        </div>
    );
}

export default ItemProject







// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import pageohmyfood from '../assets/images/pageohmyfood.webp';
// import pagekasa from '../assets/images/pagekasa.webp';
// import pageargentbank from '../assets/images/pageargentbank.webp';
// import pagePrintit from '../assets/images/pagePrintit.webp';
// import backgroundImage from '../assets/images/fonddepage.webp';
// import Bannerlogos from '../Components/Bannerlogos';

// function ItemProject() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [hovered, setHovered] = useState(false);

//     const projects = [
//         {
//             title: "Oh my food",
//             description: "Réalisation d'un site responsive vitrine pour les cartes de divers restaurateurs en utilisant SASS, et intégrant quelques animations",
//             img: pageohmyfood,
//             link: 'https://fredcentvin.github.io/projet4-ohmyfood/'
//         },
//         {
//             title: "Kasa",
//             description: "Site responsive pour de la location d'appartements entre particuliers utilisant React",
//             img: pagekasa
//         },
//         {
//             title: "ArgentBank",
//             description: "Façonnage du site d'une banque en ligne utilisant React, Redux, ainsi que de l'identification auprès du serveur avec un token et utilisation de la méthode CRUD",
//             img: pageargentbank
//         },
//         {
//             title: "Print it",
//             description: "Création du site d'une société familiale d'impression en utilisant javascript pour l'animation d'un carrousel",
//             img: pagePrintit,
//             link: "https://fredcentvin.github.io/Projet5-Print-it/"
//         }
//     ];

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
//     };

//     const handleClick = () => {
//         console.log('Lien cliqué');
//     };

//     return (
//         <div className="gridProjects" style={styles.gridProjects}>
//             <h2 className="projectsTitle" style={styles.projectsTitle}>Quelques exemples de réalisations</h2>
//             <ul style={styles.ul}>
//                 <div className='FaArrowLeft' style={styles.icon} onClick={handlePrev}>
//                     <FontAwesomeIcon icon={faChevronLeft} />
//                 </div>
//                 <li
//                     className={hovered ? 'hovered' : ''}
//                     style={styles.li}
//                     onMouseEnter={() => setHovered(true)}
//                     onMouseLeave={() => setHovered(false)}
//                 >
//                     <div className='backView' style={{ ...styles.backView, backgroundImage: `url(${backgroundImage})` }}></div>
//                     <h3 className="title" style={styles.title}>{projects[currentIndex].title}</h3>
//                     <img src={projects[currentIndex].img} alt={`Projet ${projects[currentIndex].title}`} style={styles.imgbig}></img>
//                     {projects[currentIndex].link && (
//                         <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer" onClick={handleClick} style={styles.a}>
//                             Visitez le site {projects[currentIndex].title}
//                         </a>
//                     )}
//                     {hovered && (
//                         <div style={styles.hoverCircle}>
//                             <p style={styles.hoverDescription}>{projects[currentIndex].description}</p>
//                         </div>
//                     )}
//                 </li>
//                 <div className='FaArrowRight' style={styles.icon} onClick={handleNext}>
//                     <FontAwesomeIcon icon={faChevronRight} />
//                 </div>
//             </ul>
//             <Bannerlogos />
//         </div>
//     );
// }

// const styles = {
//     gridProjects: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: '50px',
//     },
//     ul: {
//         display: 'flex',
//         flexDirection: 'row',
//         gap: '30px',
//         paddingInlineStart: '35px',
//         alignItems: 'center',
//     },
//     li: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         width: '420px',
//         height: '420px',
//         border: '2px solid #ccc',
//         borderRadius: '50%',
//         position: 'relative',
//         overflow: 'visible',
//         boxShadow: '0 4px 15px rgb(140 199 241 0.8)',
//         justifyContent: 'center',
//         transition: 'transform 0.3s ease-in-out',
//     },
//     backView: {
//         position: 'absolute',
//         top: '0',
//         left: '0',
//         width: '100%',
//         height: '100%',
//         backgroundSize: 'cover',
//         opacity: '0.7',
//         zIndex: '-1',
//         borderRadius: '50%',
//     },
//     projectsTitle: {
//         fontSize: '22px',
//         fontFamily: 'Righteous',
//         fontWeight: '200',
//         alignSelf: 'center',
//         color: '#5e7073',
//         marginBottom: '0',
//         marginTop: '30px',
//     },
//     title: {
//         color: 'white',
//         fontSize: '24px',
//         margin: '0 0 20px 0',
//         paddingBottom: '20px',
//     },
//     img: {
//         objectFit: 'cover',
//         maxWidth: '400px',
//     },
//     imgbig: {
//         width: '320px',
//         height: 'auto',
//     },
//     descriptionProject: {
//         display: 'flex',
//         fontSize: '12px',
//         paddingLeft: '50px',
//         paddingRight: '40px',
//         color: 'white',
//         fontWeight: '700',
//     },
//     a: {
//         color: 'white',
//         textDecoration: 'underline',
//         cursor: 'pointer',
//     },
//     icon: {
//         fontSize: '38px',
//         color: 'black',
//         zIndex: '1001',
//         alignContent: 'center',
//         cursor: 'pointer',
//     },
//     hoverCircle: {
//         position: 'absolute',
//         top: '50%',
//         left: '175%',
//         transform: 'translate(-50%, -50%)',
//         width: '400px',
//         height: '400px',
//         borderRadius: '50%',
//         backgroundColor: 'rgba(52, 152, 219, 0.8)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         transition: 'left 0.3s ease-in-out',
//     },
//     hoverDescription: {
//         color: 'white',
//         textAlign: 'center',
//         padding: '20px',
//     },
// };

// export default ItemProject