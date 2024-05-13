import React, { useRef } from 'react'
import './about.css';
import vedio from "../../assets/myvedio2.mp4"
import Contact from './contact/contact';
import Service from './services/service';


function About() {
  const videoRef = useRef(null);

  const handleClick = () => {
    const videoElement = videoRef.current;

    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };
  return (
    <div>
      <div className='image1about'>
        <video loop ref={videoRef}  onClick={handleClick} autoPlay>
          <source src={vedio} type="video/webm" />
          {/* Add additional source elements for different video formats if needed */}
        </video> 

      </div>
      <div className='container about3'>
      
        < h1 className='question_tamaioz'>Qui sommes-nous ? </h1>

      </div>
      <div className='container container1'>
        <div className='apropose '>
          <h2>À propos de Tamaioz</h2>
      <p><b>Il est important de réagir aux premières difficultés avec  un  bon  soutien scolaire à domicile. Un programme de cours de soutien mis en place au bon moment, avec un solide test de niveau et un coaching scolaire personnalisé, permet de garantir de très bons résultats et un parcours scolaire d'excellence.
            Tamaioz insiste sur la pédagogie et la méthodologie avec ses professeurs particuliers, à travers un coaching scolaire et des bilans réguliers. Il ne suffit pas d'être à l'aise avec tel ou tel contenu pour s'autoproclamer professeur, il faut avoir l'art et la manière de le transmettre !
          </b> </p>

        </div>
      </div>
      <Service />
      <Contact />
    </div>

  )
}

export default About
