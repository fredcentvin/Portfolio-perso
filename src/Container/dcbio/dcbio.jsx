import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logos/logo1.webp';
import './dcbio.css';

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
        <h2 className='dcbioTitle'>À propos de nous</h2>
        <div className='scrollContainer'>
          <p className='pDcBio'>
            Bienvenue chez Agence Devcode Située au cœur de la Seine-et-Marne, l'agence Devcode est votre partenaire de confiance pour tous vos besoins en développement web. Spécialisés dans la création de sites internet adaptés à tous les supports – PC, mobiles et tablettes – nous mettons notre expertise au service de votre réussite digitale.
          </p>
        </div>
      </div>
      <div className='descriptionAgence'>
        <h2 className='dcbioTitle'>Qui sommes nous?</h2>
        <p className='textDescription'>Chez Agence Devcode, nous croyons que chaque projet est unique et mérite une attention particulière. Notre équipe de développeurs passionnés et expérimentés travaille en étroite collaboration avec vous pour concevoir des solutions sur mesure qui répondent parfaitement à vos attentes et objectifs.</p>
      </div>
      <h2 className='dcbioTitle'>Nos services</h2>
      <div className='ourServices'>
        <div className='gridServices'>
          <h3 className='titleServices'> Développement de sites web :</h3>
          <p className='textDescription'> Que vous ayez besoin d'un site vitrine, d'un blog, ou d'une boutique en ligne, nous créons des sites web performants et esthétiques, optimisés pour tous les appareils.</p>
        </div>
        <div className='gridServices'>
          <h3 className='titleServices'> Responsive Design :</h3>
          <p className='textDescription'> Nous nous assurons que votre site offre une expérience utilisateur fluide et agréable, quel que soit le support utilisé.</p>
        </div>
        <div className='gridServices'>
          <h3 className='titleServices'> Maintenance et support :</h3>
          <p className='textDescription'>Nous vous accompagnons au-delà de la mise en ligne avec des services de maintenance et de support technique pour garantir la pérennité de votre site.</p>
        </div>
      </div>
      <h2 className='dcbioTitle'>Pourquoi nous choisir ?</h2>
      <div className='ourChoice'>
       
        <div className='gridChoice'>
          <h3 className='titleServices'>Expertise locale :</h3>
          <p className='textDescription'>Basés en Seine-et-Marne, nous comprenons les besoins spécifiques de notre région et sommes toujours disponibles pour des rencontres en personne.</p>
        </div>
        <div className='gridChoice'>
          <h3 className='titleServices'>Approche personnalisée :</h3>
          <p className='textDescription'>Nous prenons le temps de comprendre vos besoins et de vous proposer des solutions adaptées.</p>
        </div>
        <div className='gridChoice'>
          <h3 className='titleServices'>Technologies de pointe :</h3>
          <p className='textDescription'>Nous utilisons les dernières technologies et pratiques de développement pour vous offrir des sites web modernes et performants.</p>
        </div>
      </div>
      
      <div className='contact'>
        <div className='gridContact'>
          <h2 className='titleContact'>Contactez-nous</h2>
          <p className='textDescription'>Prêt à donner vie à votre projet web ? Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos objectifs.</p>
      
      
          <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
						<span className='adresse' itemprop="streetAddress">46 rue des Ormes</span>
						<span className='adresse'itemprop="addressLocality">Saint-Pierre les Nemours</span>,
						<span className='adresse'itemprop="addressRegion"> Saint-Pierre les Nemours</span>
						<span className='adresse'itemprop="postalCode">77140</span>
						<span className='adresse'itemprop="openingHours">Du lundi au vendredi de 10h à 19h</span>
					</div>
        </div>
       
      </div>
      
    </div>
  );
}

export default DcBio;















