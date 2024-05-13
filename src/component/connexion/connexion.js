import React, { useState } from 'react'
import './connexion.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";



const Connixion = ({ hendelcon }) => {
    const handleIconClickInsideComponent = () => {
        hendelcon();
    };
    const [prof, setprof] = useState(false);
    const [etud, setetud] = useState(true);
    const [typeuser, settypeuser] = useState('etud');
    const [data, setData] = useState({

        email: "",
        password: "",
        type: "",

    })
    const [idappt, setidappt] = useState('');
    const navigate = useNavigate();


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }


    const submitForm = (e) => {
        e.preventDefault();
        const dataSend = {
            email: data.email,
            password: data.password,
            type: typeuser,
        }

        axios.post('http://localhost/tamaioz/conx.php', dataSend)
            .then((result) => {
                const idapp = result.data.data1.status;
                // eslint-disable-next-line no-unused-expressions
                idapp === 'invalid' ? setidappt("Le mot de passe est incorrect") :
                    setidappt("Connecte avec succes");
                sessionStorage.setItem('iduser', idapp);
                navigate('/room');;
               
                setData({
                    email: "",
                    password: "",
                    type: "",
                }
                );
            })


    }





    const handleClickprof = () => {
        setprof(true);
        setetud(false);
        settypeuser('prof');
    };
    const handleClicketud = () => {
        setprof(false);
        setetud(true);
        settypeuser('etud');
    };
    return (
        <div className='connexion2'>

            <div className={prof ? 'contain2 prof' : 'contain2 '}>
                <div className='titre2'><h2>Connexion</h2> <div className='reteur'>
                    <FontAwesomeIcon onClick={handleIconClickInsideComponent} className='bx bx-menu' id="btn" icon={faX} />
                </div>
                </div>
                <div className='type'>
                    <div className={etud ? 'isnow' : ''} onClick={handleClicketud}>etudiant</div>
                    <div className={etud ? "" : 'isnow2'} onClick={handleClickprof}>professeur</div>
                </div>
                <form action='' method='post' onSubmit={submitForm}>
                    <input type='hidden' className={prof ? 'active' : ''} onChange={handleChange} value={data.type} id='type' name="type" />
                    <input type='text' className={prof ? 'active' : ''} onChange={handleChange} value={data.email} id='email' name="email" placeholder='Votre adresse e-mail' />
                    <input type='password' className={prof ? 'active' : ''} onChange={handleChange} value={data.password} id='password' name="password" placeholder='Mot de passe' />
                    <input type='submet' value='SE CONNECTER' onClick={submitForm} className={prof ? 'submet active' : 'submet'} />
                </form>
                <div className='Mot_passe_oublié'>
                    {idappt}
                </div>

            </div>

        </div >
    )
}

export default Connixion
