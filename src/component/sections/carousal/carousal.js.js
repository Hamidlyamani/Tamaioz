
import React, { useEffect } from 'react';
import './style.css';
import apprenent1 from '../../../assets/apprenent1.jpg';
import apprenent2 from '../../../assets/apprenent2.jpg';
import apprenent3 from '../../../assets/apprenent3.jpg';
import apprenent4 from '../../../assets/apprenent4.jpg';
import apprenent5 from '../../../assets/160.jpg';
import stars from '../../../assets/stars.svg';

function Carousal() {
    useEffect(() => {
        const interval = setInterval(shiftLeft, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function shiftLeft() {
        const boxes = document.querySelectorAll('.box');
        const tmpNode = boxes[0];
        if (boxes[0]) {
            boxes[0].className = 'box move-out-from-left';
        }

        setTimeout(function () {
            if (boxes.length > 5) {
                tmpNode.classList.add('box--hide');
                boxes[5].className = 'box move-to-position5-from-left';
            }
            boxes[1].className = 'box move-to-position1-from-left';
            boxes[2].className = 'box move-to-position2-from-left';
            boxes[3].className = 'box move-to-position3-from-left';
            boxes[4].className = 'box move-to-position4-from-left';
            boxes[0].remove();

            document.querySelector('.cards__container1').appendChild(tmpNode);
        }, 500);
    }

    return (
        <div className="carousal">
            <div className="container11">
                <div className="cards-wrapper1">
                    <div className="titre">
                        <h2>Qu'avez-vous dit de nos professeurs ?</h2>
                        <p>
                            Plus d'un cent d'élèves ont attribué une note de 5 étoiles à leur professeur
                        </p>
                    </div>
                    <ul className="cards__container1">
                        <li className="box">
                            <div className="auteur">
                                <img src={apprenent1} alt="" />
                            </div>
                            <div className="comontaire">
                                <h5>hamid elyamani</h5>
                                Cours très clair, Anastasia est très pédagogue. Merci beaucoup
                                <div className="rate">
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                </div>
                            </div>
                        </li>
                        <li className="box">
                            <div className="auteur">
                                <img src={apprenent4} alt="" />
                            </div>
                            <div className="comontaire">
                                <h5>OUSSAMA BNLADEN</h5>
                                Très bon prof, à l'écoute et disponible; mon fils a fait des progrès tout en passant de bons moments avec Nadia.
                                <div className="rate">
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                </div>
                            </div>
                        </li>
                        <li className="box">
                            <div className="auteur">
                                <img src={apprenent2} alt="" />
                            </div>
                            <div className="comontaire">
                                <h5>NASIMA NASROLLAH</h5>
                                Meriam donne des cours de guitare à mon fils de 6 ans, qui est débutant. Elle est sympathique et souriante, et en même temps sérieuse et appliquée. Elle sait adapter sa...
                                <div className="rate">
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                </div>
                            </div>
                        </li>
                        <li className="box">
                            <div className="auteur">
                                <img src={apprenent3} alt="" />
                            </div>
                            <div className="comontaire">
                                <h5>YASSMINE ELBADAOUI</h5>
                                Meriam donne des cours de guitare à mon fils de 6 ans, qui est débutant. Elle est sympathique et souriante, et en même temps sérieuse et appliquée. Elle sait adapter sa...
                                <div className="rate">
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                </div>
                            </div>
                        </li>
                        <li className="box">
                            <div className="auteur">
                                <img src={apprenent5} alt="" />
                            </div>
                            <div className="comontaire">
                                <h5>ZAKARIA ELAANIBA</h5>
                                Mon fils de 10 ans vient d'avoir son premier cours de magie avec Matéo (en visio) et il a adoré! Matéo est patient, pédagogue, passionné donc a su le captiver. Je recommande
                                <div className="rate">
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                </div>
                            </div>
                        </li>
                        <li className="box box--hide">
                      
                            <div className="auteur">
                                <img src={apprenent5} alt="" />
                            </div>
                            <div className="comontaire">
                                <h5>MEHDI JALOUL</h5>
                                Très bon prof, à l'écoute et disponible; mon fils a fait des progrès tout en passant de bons moments avec Nadia.
                                <div className="rate">
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                    <img src={stars} alt="" />
                                </div>
                            </div>
                        </li>
                     
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Carousal;




