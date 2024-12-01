import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logos/logo1.webp';
import './dcbio.css';
import Bannerlogos from '../../Components/bannerLogos/Bannerlogos';
import PGGt from '../../assets/images/PGGt.gif'


function DcBio() {
  const [logoAnimation, setLogoAnimation] = useState({ x: 0, y: 0, rotate: 0 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLogoAnimation({ x: '50%', y: '50%', rotate: 360 });
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='gridItemAgence'>
      <motion.img
        className='imageItemdcbio'
        src={logo}
        alt="logo de l'agence"
        initial={{ x: '-100vw', y: 0, rotate: 0 }}
        animate={logoAnimation}
        transition={{ type: 'spring', stiffness: 50, damping: 10 }}
      />
      <div className='gridDcBio'>
      <div><img className="gifAnime" src={PGGt} alt="GIF animé de réunion" /></div>
        <div className='scrollContainerDcBio'>
        <h2 className='dcbioTitle'>À propos de nous</h2>
          <p className='pDcBio'>
            Bienvenue chez Agence Devcode Située au cœur de la Seine-et-Marne, l'agence Devcode est votre partenaire de confiance pour tous vos besoins en développement web. Spécialisés dans la création de sites internet adaptés à tous les supports – PC, mobiles et tablettes – nous mettons notre expertise au service de votre réussite digitale.
          </p> 
        </div>
        
      </div>
      <div className='descriptionAgence'>
        <h2 className='dcbioTitle'>Qui sommes-nous?</h2>
        <p className='textDescription'>Chez Agence Devcode, nous croyons que chaque projet est unique et mérite une attention particulière. Notre équipe de développeurs passionnés et expérimentés travaille en étroite collaboration avec vous pour concevoir des solutions sur mesure qui répondent parfaitement à vos attentes et objectifs.</p>
      </div>
     
      <div className='contact'>
        <div className='gridContact'>
          <h2 className='titleContact'>Contactez-nous</h2>
          <p className='textDescription'>Prêt à donner vie à votre projet web ? Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos objectifs.</p>
          <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
						<span className='adresse' itemprop="streetAddress">46 rue des Ormes</span>
						<span className='adresse'itemprop="addressLocality">Saint-Pierre les Nemours</span>
						<span className='adresse'itemprop="addressRegion"> Ile de France</span>
						<span className='adresse'itemprop="postalCode">77140</span>
						<span className='adresse'itemprop="openingHours">Du lundi au vendredi de 10h à 19h</span>
					</div>
        </div>
      </div>
      <Bannerlogos className='gridBannerLogos' />
    </div>
  );
}

export default DcBio;