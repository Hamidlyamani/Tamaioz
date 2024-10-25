import './hedear.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Connixion from '../connexion/connexion';
import Registar from '../regester/registar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, } from 'react';

function Hedear() {
  const [connexion, setConnexion] = useState(false);
  const [show, setShow] = useState(false);


  const handleShow = () => {
    setShow(true);
    setConnexion(false);
  }
  const handleCloseModal = () => {
    setShow(false);

  }


  const hendelcon = () => {
    setConnexion(!connexion);
    setShow(false)
  }


  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(true);
  };
  const handleNavItemClicked = () => {
    setIsNavCollapsed(false);
  };
  return (
    <div className='navbar2'>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="tamaoiz" width="80px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavCollapse} />
          <Navbar.Collapse id="basic-navbar-nav" className={isNavCollapsed ? 'collapse' : 'collapse_custom'} >
            <Nav className="ms-auto">
              <div id="wrap1">
                <form action="" autoComplete="on">
                  <input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Qu'est-ce que tu cherches ?" />
                  <input id="search_submit" value="" type="submit" />
                </form>
              </div>
              <Link className='nav-link' to="/" onClick={handleNavItemClicked}>{isNavCollapsed} Accueil</Link>
              <Link className='nav-link' to="/prof" onClick={handleNavItemClicked}>nos professeurs</Link>
              <Link className='nav-link' to="/about" onClick={handleNavItemClicked}>À PROPOS</Link>
            </Nav>
            <button className="inscrire" onClick={handleShow}>S'inscrire</button>
            <button className="connecter" onClick={hendelcon}>Se Connecter</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {connexion ? <Connixion hendelcon={hendelcon} /> : null}
      {show ? <Registar show={show} etap='1' detail1="detail2" onClose={handleCloseModal} /> : null}
    </div>
  )
}
export default Hedear
