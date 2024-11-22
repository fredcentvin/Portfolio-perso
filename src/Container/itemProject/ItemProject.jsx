import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pageohmyfood from '../../assets/images/ohmyfood.png';
import pagekasa from '../../assets/images/kasa.png';
import pageargentbank from '../../assets/images/argentbank.png';
import pagePrintit from '../../assets/images/printit.png';
import pagePortfolio from '../../assets/images/portfolio.png'
import Bannerlogos from '../../Components/bannerLogos/Bannerlogos';
import './itemProject.css';

function ItemProject() {
    const [currentIndex, setCurrentIndex] = useState(null);

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
        },
        {
            title:"Portfolio frédéric",
            description:"Projet de fin d'étude Openclassrooms utilisant REACT",
            img: pagePortfolio,
            link: "https://agence-devcode.fr/"

        }
    ];

    const handleProjectClick = (index) => {
        setCurrentIndex(currentIndex === index ? null : index);
    };

    return (
        <div className="gridProjects">
            <h2 className="projectsTitle">Quelques exemples de réalisations</h2>
            <div className="projectsContainer">
                {projects.map((project, index) => (
                    <div key={index} className="projectWrapper">
                        <motion.div
                            className={`projectSquare ${currentIndex === index ? 'selectedSquare' : ''}`}
                            onClick={() => handleProjectClick(index)}
                            whileHover={{ scale: 1.1 }}
                        >
                            <img className='squareImage' src={project.img} alt={`Projet ${project.title}`} />
                        </motion.div>
                        <AnimatePresence>
                            {currentIndex === index && (
                                <motion.div
                                    className="projectDetail"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="title">{project.title}</h3>
                                    <p className="description">{project.description}</p>
                                    {project.link && (
                                        <a className="designLink" href={project.link} target="_blank" rel="noopener noreferrer">
                                            Visitez le site {project.title}
                                        </a>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
            <Bannerlogos />
        </div>
    );
}

export default ItemProject;
