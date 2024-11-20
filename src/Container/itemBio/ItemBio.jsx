import React, { useState, useEffect } from 'react';
import moi from '../../assets/images/moi.webp';
import './itemBio.css';

function ItemBio() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = `Boonjour et bienvenue sur mon portfolio! Je m'appelle Frédéric Boniface et je suis intégrateur web junior.
  Après plus de 20 années passées dans l'univers de la maintenance industrielle, j'ai envisagé une reconversion professionnelle.
  Passionné de longues dates par l'informatique, je me suis naturellement tourné vers l'intégration web en réalisant un parcours de formation chez OpenClassrooms menant à l'obtention d'un diplôme de niveau V et son équivalence RNCP.
  Durant ce parcours j'ai pu oeuvrer à la réalisation de divers projets utilisants différents langages tels que : HTML, CSS, SASS, JAVASCRIPT, JEST, REACT, REDUX et en intégrant la démarche SEO.
  En appliquant les principes de la méthode agile SCRUM, la gestion de version est déposée sur Github pour favoriser la collaboration.`;

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


