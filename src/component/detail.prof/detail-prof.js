import React, { useEffect } from 'react'
import './detail.prof.css'
import { useState } from 'react';
import Registar from '../regester/registar';
// import prof7 from '../../assets/prof7.jpg';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
function Detail() {
    const [data, setdata] = useState([]);

    const { id_P, Nimg } = useParams();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleCloseModal = () => setShow(false);
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost/tamaioz/detailprof.php',
                    { idprof: id_P, });
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const user = useSelector((state) => state.auth.user);
    const etap = user ? 2 : 1;

    return (
        <div>

            <div className="rs-team-Single pt-120 pb-100 md-pt-80 md-pb-60">
                <div className="container">
                    <div className="btm-info-team">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="images-part">
                                    <img src={require(`../../assets/${Nimg}`)} alt="image_p rof" />
                                </div>
                            </div>
                            <div className="col-lg-7 sm-pt-30">
                                <div className="con-info">

                                    <h1 className="title">Détail du Professeur: <span>{data[1]}</span></h1>
                                    <div className="short-desc">
                                        Nom du Professeur: {data[1]}
                                    </div>
                                    <div className="short-desc">
                                        Spécialité :  {data[9]}

                                    </div>
                                    <div className="short-desc">
                                        Expérience : 10 ans

                                    </div>
                                    <div className="short-desc">
                                        Niveau d'Éducation : {data[5]}


                                    </div>

                                    <div className="ps-informations">

                                        MARRAKECH

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 pr-55 md-pr-15">
                            <div className="project-con">
                                <h3>Biographie</h3>
                                <p>{data[7]}</p><p>Je suis un passionné de mathématiques avec une approche pédagogique interactive. J'ai une grande expérience dans l'enseignement des concepts mathématiques complexes de manière simple et compréhensible pour mes élèves.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <h3>Diplômes Et Expérience</h3>

                            <div className="rs-skillbar style1 modify2">
                                <div className="cl-skill-bar">

                                    <span className="skillbar-title">{data[5]}</span>
                                    <span className="skillbar-title"> Licence en Mathématiques Appliquées, Université Mohammed V, Rabat</span>


                                    <span className="skillbar-title">Master en Éducation et Pédagogie, Université Cadi Ayyad, Marrakech</span>
                                    <div className="skillbar" data-percent="74">
                                        <p className="skillbar-bar"></p>
                                        <span className="skill-bar-percent"></span>
                                    </div>

                                    <span className="skillbar-title">10 ans d'enseignement en tant que professeur de mathématiques au lycée Mohammed VI, Casablanca.</span>
                                    <div className="skillbar" data-percent="89">
                                        <p className="skillbar-bar"></p>
                                        <span className="skill-bar-percent"></span>
                                    </div>



                                </div>

                            </div>

                        </div> <button className="btn btn-primary py-3 px-5 mt-2 " onClick={handleShow} href="">Réservez votre cours dès maintenant</button>

                    </div>

                </div>
                {show ? <Registar show={show} etap={etap} onClose={handleCloseModal} profid={id_P} detail1="detail" /> : null}
            </div>
        </div>
    )
}

export default Detail
