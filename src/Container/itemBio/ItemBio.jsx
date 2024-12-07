import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import moi from '../../assets/images/moi.webp';
import './itemBio.css';


function ItemBio() {
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [displayedText3, setDisplayedText3] = useState('');

  const textPart1 = `Bonjour et bienvenue sur mon portfolio! Je m'appelle Frédéric Boniface et je suis un intégrateur web junior passionné par le monde numérique.<br>

  Après 10 années au service maintenance dans une fabrique de stylos et plus de 20 ans dans la gestion de la maintenance industrielle site pour un grand nom de la logistique, j'ai décidé de me reconvertir professionnellement. Passionné d'informatique depuis longtemps, j'ai naturellement choisi l'intégration web. J'ai suivi une formation chez <a href="https://www.openclassrooms.com" target="_blank" rel="noopener noreferrer" aria-label="Lien vers accueil Openclassrooms" style="color: black;">OpenClassrooms</a>, qui m'a permis d'obtenir un diplôme de niveau V, reconnu par le RNCP.

  Au cours de cette formation, j'ai travaillé sur divers projets utilisant des langages tels que HTML, CSS, SASS, JavaScript, Jest, React et Redux, tout en intégrant les principes du SEO. En appliquant la méthode agile SCRUM, j'ai également utilisé GitHub pour la gestion de version, favorisant ainsi la collaboration.<br>`;

  const textPart2 = `Mon parcours m'a permis de développer une solide expertise en intégration web, en créant des sites internet performants et esthétiques, optimisés pour tous les appareils. Je suis particulièrement attentif aux détails et à l'expérience utilisateur, veillant à ce que chaque projet soit à la fois fonctionnel et agréable à utiliser.<br>

  En dehors du travail, je suis un fervent adepte des nouvelles technologies et j'aime me tenir informé des dernières tendances en matière de développement web. J'apprécie également le travail en équipe et la collaboration, car je crois fermement que c'est en partageant nos connaissances et nos compétences que nous pouvons réaliser les meilleurs projets.<br>`;

  const textPart3 = `Je suis toujours à la recherche de nouveaux défis et de nouvelles opportunités pour mettre mes compétences à profit et continuer à apprendre et à évoluer dans ce domaine passionnant.<br>N'hésitez pas à me contacter pour discuter de vos projets et voir comment nous pouvons travailler ensemble pour les réaliser.`;

  useEffect(() => {
    setDisplayedText1(textPart1);
    setDisplayedText2(textPart2);
    setDisplayedText3(textPart3);
  }, []);

  return (
    <div className='gridItem'>
      <motion.img
        className='imageItem'
        src={moi}
        alt="profil de frédéric"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 10 }}
      />
      <div className='gridBio'>
        
        <div className='scrollContainer'>
        <h2 className='bioTitle'>À propos de moi</h2>
          <p className='pBio' dangerouslySetInnerHTML={{ __html: displayedText1 }}></p>
          
        </div>
        <div className='scrollContainer'>
          <p className='pBio' dangerouslySetInnerHTML={{ __html: displayedText2 }}></p>
        </div> 
        <div className='scrollContainer'>
          <p className='pBio' dangerouslySetInnerHTML={{ __html: displayedText3 }}></p>
        </div>
      </div>
    </div>
  );
}

export default ItemBio;

