import React, { useState, useEffect } from 'react'
import './register.css'
import segnup from '../../assets/signup-img.jpg'
import Form1 from './form1'
import Form2 from './Form2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';

const Registar = (props) => {
    const handleIconClickInsideComponent = () => {
        props.hendelRegist();
    };
    const [currentStep, setCurrentStep] = useState(props.etap);
    const [show1, setShow1] = useState(props.show);
    const handleClose = () => {
        setShow1(false);
        if (props.onClose) { 
            props.onClose(); 
        }
    };

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };
    useEffect(() => {
        const idetud = sessionStorage.getItem('iduser');
        if (idetud && props.detail1 === "detail") {
            handleNextStep()
        }
    }, []);


    return (

        < Modal show={show1}>
            <div className='container'>
                <Modal.Body>
                    <div className='connexion'>
                        <div className="main regest">
                            <h2>{currentStep === '1' ? "FORMULAIRE D INSCRIPTION ÉTUDIANT" : "FORMALITÉ DE RÉSERVATION D'UN COURS"}<FontAwesomeIcon onClick={handleClose} className='bx bx-menu' id="btn" icon={faX} /></h2>
                            <div className='reteur'></div>
                            <div className="signup-content">

                                <div className="signup-form">

                                    {currentStep === '1' ? <Form1 handleNextStep={handleNextStep} detail2={props.detail1} handleIconClickInsideComponent2={handleIconClickInsideComponent} /> : <Form2 handleIconClickInsideComponent2={handleIconClickInsideComponent} profid={props.profid} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </div>
        </Modal >



    )
}

export default Registar





