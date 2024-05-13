import React, { useState, useEffect } from 'react'
import './register.css'
import segnup from '../../assets/signup-img.jpg'
import Form1 from './form1'
import Form2 from './Form2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';

const Registar = (props) => {
    const [show, setShow] = useState(props.show);
    const handleIconClickInsideComponent = () => {
        props.hendelRegist();
    };
   
    const [currentStep, setCurrentStep] = useState(props.etap);

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };
    useEffect(() => {
        const idetud = sessionStorage.getItem('iduser');
        if (idetud && props.detail1 === "detail") {
            handleNextStep()
        }
    }, []);
    // const handleClose = () => setShow(false);
    return (
        < Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='connexion'>
                    <div className="main regest">
                        <div className="container">
                            <div className="signup-content">
                                <div className="signup-img">
                                    <img src={segnup} alt="" />
                                </div>
                                <div className="signup-form">
                                    <h2>{currentStep === '1' ? "FORMULAIRE D INSCRIPTION ÉTUDIANT" : "FORMALITÉ DE RÉSERVATION D'UN COURS"}<FontAwesomeIcon className='bx bx-menu' id="btn" icon={faX} /></h2><div className='reteur'>

                                    </div>
                                    {currentStep === '1' ? <Form1 handleNextStep={handleNextStep} detail2={props.detail1} handleIconClickInsideComponent2={handleIconClickInsideComponent} /> : <Form2 handleIconClickInsideComponent2={handleIconClickInsideComponent} profid={props.profid} />}


                                    <div className="form-submit">

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Modal.Body>

        </Modal >



    )
}

export default Registar





