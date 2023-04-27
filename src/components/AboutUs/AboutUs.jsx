/* eslint-disable react/no-unescaped-entities */
import './style.scss';

function AboutUs() {
  return (
    <div className="about_us">
      <div className="container">
        <header>
          <h1 className="page-title">À propos</h1>
        </header>
        <main>
          <article className="content">
            <section className="content__descriptor">
              <h2 className="content__title">Contributeurs</h2>
              <p className="content__team">
                Nirakone Sunthorn
              </p>
              <span className="content__status">Lead Dev Front</span>
              <p className="content__team">
                Théo Schwilden
              </p>
              <span className="content__status">Product Owner</span>
              <p className="content__team">
                Anas Naoui
                {' '}
              </p>
              <span className="content__status">Scrum Master</span>
              <p className="content__team">
                Thomas Dupez
                {' '}
              </p>
              <span className="content__status">Lead Dev Back</span>
              <p className="content__team">
                Nathan Imbert
              </p>
              <span className="content__status">Git Master</span>

            </section>
            <section className="content__text-box">
              <p className="content__text">
                Bienvenue sur notre site de gestion de déménagement !
              </p>
              <p className="content__text">
                Mes cartons est la solution idéale pour organiser votre
                déménagement de manière pratique et efficace.
                Notre site vous permet de gérer vos cartons de
                déménagement en leur assignant une pièce spécifique,
                un nom et une liste d'articles à l'intérieur.
                Plus besoin de chercher désespérément vos affaires après le déménagement,
                tout est organisé et facilement accessible grâce à Mes cartons.
              </p>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}

export default AboutUs;
