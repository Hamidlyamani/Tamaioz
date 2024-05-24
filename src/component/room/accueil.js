import React from 'react'
import './accueil.css'
import graph from '../../assets/line_graph.png'
function Acc() {
    return (
        <div className='Acc'>
            <div className='accueilA'>
                <div className="roomAcueil">

                    <div className='calndr'>
                        <div className="schedule-container">
                            <div className="schedule-stage__wrapper">
                                <h5>Votre emploi du temps personnalisé:</h5>
                                <section className="schedule-stage">
                                    <div className="schedule-stage_guide-container">
                                        <div className="guide-slot">
                                            <p>Lundi: 8:00am - 9:00am</p>
                                            <div className="guide-slot_card">
                                                <h4>Limites et continuité</h4>

                                            </div>
                                        </div>
                                        <div className="guide-slot">
                                            <p>mercredi: 19:00am - 20:00am</p>
                                            <div className="guide-slot_card">
                                                <h4>Dérivation et étude des fonctions.</h4>

                                            </div>

                                        </div>
                                        <div className="guide-slot">
                                            <p>Samedi: 10:00am - 11:00am</p>
                                            <div className="guide-slot_card">
                                                <h4>
                                                    Fonctions primitives.
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>



                </div>
                <div className='niveau'>
                    <h5>  Progression de votre niveau selon les résultats des tests
                    </h5><div className='graph'> <img src={graph} alt='g' /></div>
                    <div className='explination'>
                        <div className='exp'>
                        <div className='color'></div><div className='contemnt'>
                                Mathématique
                            </div>
                        </div>
                        <div className='exp'>
                            <div className='color blue'></div>
                            <div className='contemnt'>Anglais</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='note'>
                <h5>Note:</h5>
                <p>Cher étudiant, chaque cours que vous terminez vous rapproche un peu plus de vos objectifs. Continuez à vous investir et à persévérer, vous êtes sur la voie de la réussite !
                </p> </div>
        </div>
    )
}

export default Acc
