import React from 'react';
import './accueil.css'

import Typeetudiant from '.././sections/typeetudiant.js';
import Type22 from '.././sections/type22';
import Carousal from '../sections/carousal/carousal.js';

import teacher1 from '../../assets/1.png';
import teacher2 from '../../assets/4.jpg';
import teacher3 from '../../assets/5.jpg';
import hero from '../../assets/hero.png';
import preparing from '../../assets/preparing-exam.png';
import women from '../../assets/women g.png';
import language from '../../assets/language-learning (2).png';

import star from '../../assets/stars.svg'
import { Link } from 'react-router-dom';



function Accueil() {



  return (
    <div className='centent_accueil'>
      <div className="pagedebonvenue container">
        <div className="titre_intro_button">
          <div className='titre'>LE SOUTIEN SCOLAIRE SUR MESURE, CHEZ VOUS ET À VOTRE RYTHME</div>
          <div className='intro'>Tamaioz offre une éducation sur mesure grâce aux meilleurs enseignants à domicile. Atteignez vos objectifs scolaires à votre propre rythme avec notre approche personnalisée.</div>
          <Link to="/prof" className='link_button'>
            <button className='button1'>Trouvez votre enseignant</button>
          </Link>
        </div>
        <div className="images" id='image'>
          
       
          <div className='divimg imag3' id='img3'>
            <div className='contain' >

              <img src={teacher3} className='imge img3' alt='img' />
              <div className='matier'>Arabic</div>
              <div className="info">
                <h5>Imane</h5>
                <div className='ville_star'>
                  <div>Tanger </div>
                  <div > <img src={star} alt='m' />5/5</div>
                </div>
              </div>
            </div>
          </div>
          <div className='divimg imag2' id='img2'>
            <div className='contain' >
              <img src={teacher2} className='imge img2' alt='img' />
              <div className='matier'>english</div>
              <div className="info">
                <h5>Ayoub</h5>
                <div className='ville_star'>
                  <div>Marrakech </div>
                  <div > <img src={star} alt='m' />5/5</div>
                </div>
              </div>
            </div>
          </div>
          <div className='divimg imag1' id='img1'>
            <div className='contain contain1'>
              <img src={teacher1} className='imge img1' alt='img' />
              <div className='matier  matier1'>physique</div>
              <div className="info">
                <h5>Nassima</h5>
                <div className='ville_star'>
                  <div>AGADIR</div>
                  <div > <img src={star} alt='m' />5/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='apropos_T_section_background'>
        <div className='apropos_T container'>

          <div className='titre_apropos_T'>Des cours à domicile flexibles et personnalisés pour des résultats
            garantis avec Tamaioz</div>

          <div className='text_apropos_T'>Tamaioz est la plateforme idéale pour les étudiants à la recherche d'un soutien scolaire flexible et personnalisé. Grâce à nos enseignants qualifiés et expérimentés, vous pouvez organiser des cours selon vos disponibilités et adapter le contenu des cours à vos besoins spécifiques. Nous garantissons des résultats positifs pour chaque étudiant grâce à nos méthodes d'enseignement innovantes et à notre engagement envers la réussite de nos élèves. Rejoignez notre communauté d'apprenants motivés et commencez à réaliser vos objectifs académiques dès aujourd'hui avec Tamaioz.</div>
        </div>
      </div>
      <div className='types'>

        <Type22 titre="Devenez un super-héros de l'apprentissage
                    avec Tamaioz!" text="Avec Tamaioz, devenez un héros de l'apprentissage en apprenant à lire, écrire et comprendre les mathématiques de base, tout en développant des compétences sociales et émotionnelles. Cultivez votre créativité et vos compétences de résolution de problèmes pour réussir. Rejoignez Tamaioz pour conquérir le monde de l'éducation ensemble." image={hero} />

        <Typeetudiant titre="Soyez prêt pour votre réussite scolaire avec Tamaioz."
          text="Tamaioz offre une aide pour préparer l'examen du baccalauréat avec des enseignants qualifiés. Améliorez vos compétences en rédaction, en communication, en mathématiques, en sciences, en informatique, en histoire et en géographie pour atteindre vos objectifs scolaires. Inscrivez-vous dès maintenant et devenez un champion de la réussite scolaire avec Tamaioz." image={preparing} />
        <Type22 titre="Réussissez vos examens universitaires et préparez
 votre avenir avec Tamaioz."
          text="Tamaioz propose des ressources pour aider les étudiants ambitieux à réussir leurs examens et à accéder à l'école supérieure ou à un diplôme universitaire spécifique. Améliorez vos compétences en recherche, analyse, gestion de projet et savoir professionnel grâce à notre équipe d'enseignants qualifiés. Inscrivez-vous dès maintenant pour préparer votre avenir avec Tamaioz." image={women} />
        <Typeetudiant titre="Développez votre confiance en vous grâce à notre programme d'apprentissage de langues."
          text="Tamaioz offre une aide personnalisée pour apprendre une nouvelle langue avec des enseignants qualifiés. Développez votre confiance en vous et apprenez à votre propre rythme pour améliorer vos compétences de communication et vous intégrer dans une nouvelle culture. Inscrivez-vous dès maintenant pour acquérir une maîtrise de la langue en peu de temps avec Tamaioz." image={language} />
      </div>
      <div className='etapes container'>
        <h2 className='titre1'>Suivez votre parcours éducatif personnalisé  <b className='block'>en  <span>5</span> étapes avec Tamaioz</b></h2>


        <div className="w3-container">
          <div className="zigzag-timeline__item">
            <h3 className='titrenumbre'> <span>1</span> </h3>
            <h3>Choisis ton professeur idéal pour un accompagnement sur mesure.</h3>
            <div className="zigzag-timeline__milestone">Sélectionne</div>
            <p>Trouve un professeur expérimenté et compétent qui répondra spécifiquement à tes besoins éducatifs. Sélectionne parmi notre large panel d'enseignants qualifiés celui qui correspond le mieux à ton profil et à tes objectifs.

            </p>

          </div>

          <div className="zigzag-timeline__item">
            <h3 className='titrenumbre'> <span>2</span> </h3>
            <h3>   Soumets ta demande de cours en quelques clics.</h3>
            <div className="zigzag-timeline__milestone">Demande</div>
            <p> Remplis notre formulaire en ligne pour nous faire part de tes besoins et préférences. Indique les matières que tu souhaites étudier, ton niveau, tes disponibilités et toute autre information pertinente pour que nous puissions te proposer le professeur idéal.</p>
          </div>

          <div className="zigzag-timeline__item">
            <h3 className='titrenumbre'> <span>3</span> </h3>
            <h3>Obtiens une confirmation personnalisée et planifie tes cours selon tes disponibilités.</h3>
            <div className="zigzag-timeline__milestone">Confirmation </div>
            <p>Notre équipe te contactera dans les plus brefs délais pour confirmer ta demande et organiser les horaires de tes cours. Nous nous assurerons de trouver des créneaux qui correspondent à ton emploi du temps afin de faciliter ton engagement dans le programme d'apprentissage.</p>
          </div>

          <div className="zigzag-timeline__item">
            <h3 className='titrenumbre'> <span>4</span> </h3>
            <h3> Profite d'une séance d'essai gratuite pour découvrir ton professeur.</h3>
            <div className="zigzag-timeline__milestone">Essai </div>
            <p> Avant de t'engager, bénéficie d'une session d'essai gratuite avec ton professeur sélectionné. Cette séance te permettra de te familiariser avec sa méthode d'enseignement, de poser des questions et de voir si vous êtes compatibles pour travailler ensemble.</p>

          </div>

          <div className="zigzag-timeline__item">
            <h3 className='titrenumbre'> <span>5</span> </h3>
            <h3>Plonge dans ton parcours éducatif avec des cours de qualité.</h3>
            <div className="zigzag-timeline__milestone">Apprends</div>
            <p>Une fois que tu as choisi ton professeur et confirmé tes cours, tu peux commencer ton parcours éducatif personnalisé. Profite d'un enseignement de qualité qui t'aidera à développer tes connaissances, tes compétences et à atteindre tes objectifs académiques.</p>
          </div>



        </div>
      </div>



      {/* <Carousal /> */}


    </div>


  )
}

export default Accueil