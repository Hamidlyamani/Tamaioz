import React from 'react'
import img1 from '../../../assets/aboutus.jpg'
import mess1 from '../../../assets/mession1.jpg'
import mess2 from '../../../assets/mession2.jpg.png'
import mess3 from '../../../assets/mession3.jpg.png'
import mess4 from '../../../assets/mession4.jpg.png'
import './service.css'

function Service() {

    return (
        <div className='serv'>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item text-center pt-3">
                                <div className="p4">
                                    <i className="fa fa-3x fa-graduation-cap t-primary mb-4"></i>
                                    <h5 className="mb-3">Excellence</h5>
                                    <p>Nous nous efforçons d'offrir des cours de haute qualité, un service client exceptionnel et une plateforme technologique performante. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item text-center pt-3">
                                <div className="p4">
                                    <i className="fa fa-3x fa-globe t-primary mb-4"></i>
                                    <h5 className="mb-3">Adaptabilité</h5>
                                    <p>Nous nous adaptons aux besoins spécifiques de chaque élève, en proposant des solutions personnalisées et flexibles.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item text-center pt-3">
                                <div className="p4">
                                    <i className="fa fa-3x fa-home t-primary mb-4"></i>
                                    <h5 className="mb-3">Collaboration</h5>
                                    <p>Nous favorisons un environnement d'apprentissage collaboratif, encourageant les échanges d'idées et les efforts d'équipe.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item text-center pt-3">
                                <div className="p4">
                                    <i className="fa fa-3x fa-book-open t-primary mb-4"></i>
                                    <h5 className="mb-3">Intégrité</h5>
                                    <p>Nous agissons avec intégrité, éthique et transparence, en respectant la confidentialité des données et en maintenant des normes élevées de qualité et de service.m</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ "minHeight": "400px" }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src={mess1} alt="" style={{ 'objectFit': 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-start t-primary pe-3">Notre mission.</h6>
                            <h1 className="mb-4">Éduquer pour l'avenir .</h1>
                            <p className="mb-4">Tamaioz : faciliter l'accès à l'éducation avec une plateforme de cours à domicile de qualité, reliant les étudiants à des professeurs compétents. </p>
                            <p className="mb-4">Objectif : atteindre les objectifs académiques, développer les compétences et renforcer la confiance des étudiants. Mission : inspirer la passion pour l'apprentissage, favoriser la croissance personnelle et intellectuelle de chaque élève.</p>
                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right t-primary me-2"></i>Faciliter l'accès</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right t-primary me-2"></i>Atteindre objectifs</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right t-primary me-2"></i>Développer compétences</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right t-primary me-2"></i>Renforcer confiance</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right t-primary me-2"></i>Adapter besoins</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right t-primary me-2"></i>Inspirer passion</p>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5 mt-2" href="#$G"> Contact-Nous</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center t-primary px-3">Notre Services</h6>
                        <h1 className="mb-5">Services Éducatifs Variés</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={mess3} alt="h" />
                                </div>
                              
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Cours à domicile</h5>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={mess4} alt="h" />
                                </div>
                              
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Tutorat en ligne</h5>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={mess2} alt="h" />
                                </div>
                              
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Préparation aux examens</h5>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={img1} alt="h" />
                                </div>
                                
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Assistance scolaire</h5>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Service
