import React from 'react';
import './fouter.css';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Foeter() {
    return (
        <div className='footer1'>
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Liens importants</h4>
                            <Link className="btn btn-link" to='/'>À propos de nous</Link>
                            <Link className="btn btn-link" href='#h'>Accueil</Link>
                            <Link className="btn btn-link" href='#h'>Politique de confidentialité</Link>
                            <Link className="btn btn-link" href='#h'>Conditions générales</Link>
                            <Link className="btn btn-link" href='#h'>FAQ et Aide</Link>


                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Navigation rapide</h4>
                            <Link className="btn btn-link" to='/'>Accueil</Link>
                            <Link className="btn btn-link" to='/about'>À propos de nous</Link>
                            <Link className="btn btn-link" to='/prof'>Professeurs</Link>
                            <Link className="btn btn-link" to='/'>Connexion</Link>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Contact</h4>
                            <p className="mb-2">(+212)678781280</p>
                            <p className="mb-2">info@tamaioz.com</p>

                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3"><img src={logo} alt="logo"></img></h4>
                            <p>Restez informé en vous abonnant à notre bulletin d'information.</p>
                            <div className="position-relative mx-auto" style={{ 'maxWidth': '400px' }}>
                                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Votre email" />
                                <button type="button" className="btn btn-primary py-2  top-0 end-0 mt-2 me-2">
                                    Inscrivez-vous</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#d">TAMAIOZ.MA</a>, All Right Reserved.

                                {/* <!--/*** This template is free as long as you keep the footer authors credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
                                Designed By <a className="border-bottom" href="">Hamid Elyamani</a>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <a href='#h'>Accueil</a>
                                    <a href='#h'>Cookies</a>
                                    <a href='#h'>Aide</a>
                                    <a href='#h'>FAQs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

