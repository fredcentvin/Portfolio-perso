import React from 'react';
import './nosservices.css';

function NosServices() {
  return (
    <div className='nosServicesContainer'>
     
     
      <h2 className='titleNosServices'>Nos services</h2>
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
          <p className='textDescription'>Nous vous accompagnons au-delà de la mise en ligne avec des services de maintenance et de support technique pour garantir la pérennité de votre site, ainsi que les mises à jour.</p>
        </div>
      </div>
      <h2 className='titleNosServices'>Pourquoi nous choisir ?</h2>
      <div className='ourChoice'>
       
        <div className='gridChoice'>
          <h3 className='titleServices'>Expertise locale :</h3>
          <p className='textDescription'>Basés en Seine-et-Marne, nous comprenons les besoins spécifiques de notre région et sommes toujours disponibles pour des rencontres en personne.</p>
        </div>
        <div className='gridChoice'>
          <h3 className='titleServices'>Approche personnalisée :</h3>
          <p className='textDescription'>Nous prenons le temps de comprendre vos besoins et de vous proposer des solutions adaptées durant nos réunions équipe/client.</p>
        </div>
        <div className='gridChoice'>
          <h3 className='titleServices'>Technologies de pointe :</h3>
          <p className='textDescription'>Nous utilisons les dernières technologies et pratiques de développement pour vous offrir des sites web modernes et performants.</p>
          
        </div>
      </div>
    </div>
  );
}

export default NosServices;
