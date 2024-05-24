import React, { useState, useEffect } from 'react'
import './room.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import img1 from '../../assets/apprenent1.jpg'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faFileVideo } from '@fortawesome/free-regular-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import logo from '../../assets/logo.png';
import Acc from './accueil'
import Message from '../messanger/message'
import JitsiMeet from './jitsimeeting'
import Listprofs from './listprofs'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import File from './file.'
import withAuth from '../withAuth'



function Room() {
  const location = useLocation();
  const variableValue = location.state?.variable;
  const [activepage, setactivepage] = useState("acc");
  const [isActive, setIsActive] = useState(false);
  const [data, setdata] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost/tamaioz/buld_room.php',
          { idroom: variableValue, });
        setdata(response.data.data1.status)
        console.log(data); // Handle the response as needed           
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  // 


  const signout = () => {
    navigate('/');
    sessionStorage.removeItem('iduser');
    window.location.reload()
  }


  const hendlroom = (a) => {
    setactivepage(a);
  }






  const handleClick = () => {
    setIsActive(!isActive);
  };



  return (
    <div className='contanerglobal'>
      <div className='sidebar1 containerrooom'  >
        <div className={!isActive ? 'sidebar open' : 'sidebar'}>
          <div className="logo-details">
            <i className='bx bxl-c-plus-plus icon'></i>
            <div className="logo_name"><img src={logo} alt="" /></div>
            <FontAwesomeIcon className='bx bx-menu' id="btn" onClick={handleClick} icon={faBars} style={{ color: "#ffffff", }} />
          </div>
          <ul className="nav-list">
            {/* */}
            <li onClick={() => hendlroom('acc')} >
              <span>
                <FontAwesomeIcon className='bx bx-grid-alt' icon={faHouse} style={{ color: "#ffffff" }} />
                <i className='-user'></i>
                <span className="links_name">Salon</span>
              </span>
              <span className="tooltip">Salon</span>
            </li>
            {/* onClick={hendlroom('prof')} */}
            <li onClick={() => hendlroom('prof')}>
              <span>
                <FontAwesomeIcon className='bx bx-user' icon={faUser} style={{ color: "#ffffff" }} />
                <i className=' -user'></i>
                <span className="links_name">Professeurs</span>
              </span>
              <span className="tooltip">professeurs</span>
            </li>
            {/* onClick={hendlroom('message')} */}
            <li onClick={() => hendlroom('message')}>
              <span>
                <FontAwesomeIcon className='bx bx-user' icon={faComments} style={{ color: "#ffffff" }} />
                <i className=' -chat'></i>
                <span className="links_name">Messages</span>
              </span>
              <span className="tooltip">Messages</span>
            </li>
            {/* onClick={hendlroom('vedio')} */}
            <li onClick={() => hendlroom('vedio')}>
              <span>  <FontAwesomeIcon className='bx bx-user' icon={faFileVideo} style={{ color: "#ffffff" }} />
                <i className=' -pie-chart-alt-2'></i>
                <span className="links_name">SalleVirtuelle</span>
              </span>
              <span className="tooltip">SalleVirtuelle</span>
            </li>

            <li className="profile">
              <div className="profile-details">
                <img src={img1} alt="profileImg" />
                <div className="name_job">
                  <div className="name">{data[1]}</div>
                  <div className="job"></div>
                </div>
              </div>
              <i className=' -log-out' id="log_out">
                <FontAwesomeIcon className='bx bx-user' onClick={signout} icon={faArrowRightFromBracket} style={{ color: "#ffffff" }} />
              </i>
            </li>
          </ul>
        </div>
      </div>
      <section className={!isActive ? ' section section-sedbar' : 'section'}>
        <h6 className='titre1'>Bienvenue <span className='span'>Mr {data[1]}  </span> dans votre espace d'apprentissage personnalisé.</h6>

        {activepage === "acc" && <Acc />}
        {activepage === "prof" && <Listprofs data={data} />}
        {activepage === "message" && <Message data={data[2]} />}
        {activepage === "vedio" && <JitsiMeet />}
        {activepage === "file" && < File />}

      </section >

    </div >

  )
}

export default withAuth(Room);