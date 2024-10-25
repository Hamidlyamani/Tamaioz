import React, { useState } from 'react'
import './connexion.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebaseConfig';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../lib/authSlice';
import { toast } from 'react-toastify';


const Connixion = ({ hendelcon }) => {
    const dispatch = useDispatch();
    const [prof, setprof] = useState(false);
    const [etud, setetud] = useState(true);
    const [typeuser, settypeuser] = useState('etud');
    let localErrorOrNotfr = false;
    let localErrorOrNot = false;
    const handleIconClickInsideComponent = () => {
        hendelcon();
    };

    const [data, setData] = useState({
        email: "",
        password: "",
        type: "",
    })
    const [idappt, setidappt] = useState('');
    const navigate = useNavigate();
    const idetud = sessionStorage.getItem('iduser');
    const idprof = null;
    const nomroom = idetud + "000";
    const room_demmande = async (e) => {
        const dataSend = {
            idetud: idetud,
            idprof: null,
            nameroom: nomroom
        }
        await axios.post('http://localhost/tamaioz/room_demmande.php', dataSend).then((result) => {
            navigate('/room', { state: { variable: nomroom } });
        });
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try {


            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            dispatch(loginSuccess(user));

        } catch (error) {
            localErrorOrNotfr = true;
        }

        const dataSend = {
            email: data.email,
            password: data.password,
            type: typeuser,
        }

        await axios.post('http://localhost/tamaioz/conx.php', dataSend)
            .then((result) => {
                const idapp = result?.data?.data1?.status;
                if (idapp === 'invalid') {
                    setidappt("L'email ou le mot de passe est incorrect")
                    localErrorOrNot = true;
                }
                else {
                    handleIconClickInsideComponent();
                    room_demmande()

                }
                setData({
                    email: "",
                    password: "",
                    type: "",
                }
                );
            })
        if (!localErrorOrNot && !localErrorOrNotfr) {
            toast.success('Félicitations ! Vous êtes maintenant connecté(e) avec succès.');
        } else {
            toast.error('Erreur de connexion ! Veuillez vérifier vos informations et réessayer.');
        }
    }


    // const show_alert = async () => {
    //     console.log('Firebase Error:', error_or_notfr, 'Axios Error:', error_or_not);


    // };
    // // Réinitialiser les erreurs après affichage des toasts
    // setErrorOrNot(false);
    // setErrorOrNotfr(false);



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
                    <input type='hidden' className={prof ? 'active' : ''} id='type' name="type" />
                    <input type='text' className={prof ? 'active' : ''} onChange={handleChange} value={data.email} id='email' name="email" placeholder='Votre adresse e-mail' />
                    <input type='password' className={prof ? 'active' : ''} onChange={handleChange} id='password' name="password" placeholder='Mot de passe' />
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
