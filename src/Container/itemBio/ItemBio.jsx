import React, { useState, useEffect } from 'react';
import moi from '../../assets/images/moi.webp';
import './itemBio.css';

function ItemBio() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = `Boonjour et bienvenue sur mon portfolio! Je m'appelle Frédéric Boniface et je suis un intégrateur web junior.

Après plus de 20 ans dans le domaine de la maintenance industrielle, j'ai décidé de me reconvertir professionnellement. Passionné d'informatique depuis longtemps, j'ai naturellement choisi l'intégration web. J'ai suivi une formation chez OpenClassrooms, qui m'a permis d'obtenir un diplôme de niveau V, reconnu par le RNCP.

Au cours de cette formation, j'ai travaillé sur divers projets utilisant des langages tels que HTML, CSS, SASS, JavaScript, Jest, React et Redux, tout en intégrant les principes du SEO. En appliquant la méthode agile SCRUM, j'ai également utilisé GitHub pour la gestion de version, favorisant ainsi la collaboration.`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30); 
    return () => clearInterval(interval);
  },[]);

  return (
    <div className='gridItem'>
      <img className='imageItem' src={moi} alt="profil de frédéric"></img>
      <div className='gridBio'>
        <h2 className='bioTitle'>À propos de moi</h2>
        <div className='scrollContainer'>
          <p className='pBio'>{displayedText}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemBio;


