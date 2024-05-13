import React from 'react'
import './contact.css'



function Contact() {
  return (
    <div>
          <section className="contact-us" id="contact">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-9 align-self-center">
                          <div className="row">
                              <div className="col-lg-12">
                                  <form id="contact" action="" method="post">
                                      <div className="row">
                                          <div className="col-lg-12">
                                              <h2>Prenons contact</h2>
                                          </div>
                                          <div className="col-lg-4">
                                              <fieldset>
                                                  <input name="name" type="text" id="name" placeholder="VOTRE NOM...*" required=""/>
                                              </fieldset>
                                          </div>
                                          <div className="col-lg-4">
                                              <fieldset>
                                                  <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="VOTRE EMAIL..." required=""/>
                                              </fieldset>
                                          </div>
                                          <div className="col-lg-4">
                                              <fieldset>
                                                  <input name="subject" type="text" id="subject" placeholder="SUJET..."/>
                                              </fieldset>
                                          </div>
                                          <div className="col-lg-12">
                                              <fieldset>
                                                  <textarea name="message" type="text" className="form-control" id="message" placeholder="VOTRE MESSAGE..." required=""></textarea>
                                              </fieldset>
                                          </div>
                                          <div className="col-lg-12">
                                              <fieldset>
                                                  <button type="submit" id="form-submit" className="button">ENVOYER LE MESSAGE MAINTENANT</button>
                                              </fieldset>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="right-info">
                              <ul>
                                  <li>
                                      <h6>Numéro de téléphone</h6>
                                      <span>(+212)678781280</span>
                                  </li>
                                  <li>
                                      <h6>
                                          Adresse e-mail</h6>
                                      <span>info@tamaioz.edu</span>
                                  </li>
                                 
                                  <li>
                                      <h6>
                                          URL du site web</h6>
                                      <span>www.tamaioz.ma</span>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>

          </section> 
    </div>
  )
}

export default Contact
