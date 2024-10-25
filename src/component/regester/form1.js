import React, { useState } from 'react';
import axios from 'axios';
import { auth, db } from '../../lib/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess } from '../../lib/authSlice';
import { toast } from 'react-toastify';

const Form1 = (props) => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        ville: "",
        sexe: "",
        email: "",
        password: "",
        adresse: "",
    });
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());
        let userIdLocal1 = null;
        try {
            const response = await axios.post('http://localhost/tamaioz/test.php', formDataObj);
            const responseData = response.data.data1.status;
            sessionStorage.setItem('iduser', responseData);
            userIdLocal1 = responseData;

        } catch (error) {
            console.error("Error sending data to server:", error);
        }



        try {
            dispatch(loginStart());
            const userCredential = await createUserWithEmailAndPassword(auth, formDataObj.email, formDataObj.password);
            const user = userCredential.user;

            // Store user info in Firestore
            await setDoc(doc(db, "users", user.uid), {
                username: formDataObj.name,
                email: user.email,
                uid: user.uid,

                u_phone: formDataObj.phone,
                u_phone: formDataObj.phone,
                u_ville: formDataObj.ville,
                u_sexe: formDataObj.sexe,
                u_adresse: formDataObj.adresse,
            });

            await setDoc(doc(db, "userchats", user.uid), {
                chats: [],
                userIdLocal: userIdLocal1,
            });
            dispatch(loginSuccess(user));


            console.log("User registered and data stored:", user);
            toast.success('Félicitations ! Votre compte a été créé avec succès.');

        } catch (error) {
            console.error("Error registering user:", error);
            toast.error('Erreur technique ! Impossible de finaliser votre inscription. Veuillez réessayer plus tard.');
        }



        setData({
            name: "",
            phone: "",
            ville: "",
            sexe: "",
            email: "",
            password: "",
            adresse: "",
        });
        ;
        if (props.profid === undefined) {
            props.handleClose2();
        }
        else {
            props.handleNextStepProps();
        }
    };

    return (
        <div>
            <form method="POST" onSubmit={submitForm} className="register-form" id="register-form">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Nom Complet :</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Votre nom complet"
                            value={data.name}
                            onChange={handleChange}
                            id="name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Numero de téléphone :</label>
                        <input
                            type="number"
                            name="phone"
                            placeholder="Numéro de téléphone"
                            value={data.phone}
                            onChange={handleChange}
                            id="phone"
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="ville">Ville :</label>
                        <div className="form-select">
                            <select name="ville" id="state1" onChange={handleChange} value={data.ville} required>
                                <option value="" disabled>Choisir une ville</option>
                                <option value="Marrakech">Marrakech</option>
                                <option value="Essaouira">Essaouira</option>
                                <option value="Casablanca">Casablanca</option>
                                <option value="Rabat">Rabat</option>
                                <option value="Tanger">Tanger</option>
                            </select>
                            <span className="select-icon"><i className="zmdi zmdi-chevron-down"></i></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sexe">Sexe :</label>
                        <div className="form-select">
                            <select name="sexe" id="state" onChange={handleChange} value={data.sexe} required>
                                <option value="" disabled>Choisir un sexe</option>
                                <option value="Masculin">Masculin</option>
                                <option value="Féminin">Féminin</option>
                            </select>
                            <span className="select-icon"><i className="zmdi zmdi-chevron-down"></i></span>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email :</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Votre adresse e-mail"
                            value={data.email}
                            onChange={handleChange}
                            id="email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe :</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Votre mot de passe"
                            value={data.password}
                            onChange={handleChange}
                            id="password"
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="adresse">Adresse :</label>
                    <input
                        type="text"
                        name="adresse"
                        placeholder="Votre adresse"
                        value={data.adresse}
                        onChange={handleChange}
                        id="adresse"
                        required
                    />
                </div>

                <div className="form-group buttons">
                    <input type="reset" value="Reset All" className="submit" name="reset" id="reset" />
                    <input type="submit" className="submit" name="submit" id="submit" />
                </div>
            </form>
        </div>
    );
};

export default Form1;
