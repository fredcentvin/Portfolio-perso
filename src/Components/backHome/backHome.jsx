import { Link } from "react-router-dom";

export default function BackHome() {
    return (
       <main>
          <section>
             <Link className="designLinkHome" to="/" aria-label="Retour vers page d'accueil">Retour sur la page d'accueil</Link>
          </section>
       </main>
    )
  }