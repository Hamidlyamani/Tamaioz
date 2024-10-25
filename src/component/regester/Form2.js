/* eslint-disable no-unused-expressions */
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form2(props) {
    let navigate = useNavigate()
    const idetud = sessionStorage.getItem('iduser');
    const idprof = props.profid;
    const nomroom = idetud + "000";
    const submitForm = (e) => {
        e.preventDefault();
        const dataSend = {
            idetud: idetud,
            idprof: idprof,
            nameroom: nomroom
        }
        axios.post('http://localhost/tamaioz/room_demmande.php', dataSend).then((result) => {
            navigate('/room', { state: { variable: nomroom } });
        });
    }
    return (
        <div>
            <form method="POST" className="register-form" onSubmit={submitForm} id="register-form">
                <div className="form-group">
                    <label htmlFor="course">niveau :</label>
                    <div className="form-select">
                        <select name="niveau" id="course">
                            <option value=""></option>
                            <option value="École primaire">École primaire</option>
                            <option value="Collège">Collège</option>
                            <option value="Enseignement supérieur">Enseignement supérieur (université, grandes écoles)</option>
                            <option value="Préparation aux concours ">Préparation aux concours(médecine, ingénierie, etc.) </option>
                            <option value="Formation professionnelle">Formation professionnelle</option>
                        </select>
                        <span className="select-icon"><i className="zmdi zmdi-chevron-down"></i></span>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="course">ou? :</label>
                    <div className="form-select">
                        <select name="course" id="course">
                            <option value=""></option>
                            <option value="computer"> A domicile </option>
                            <option value="desiger">En ligne</option>
                            <option value="marketing">Enseignement hybride</option>
                        </select>
                        <span className="select-icon"><i className="zmdi zmdi-chevron-down"></i></span>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Votre objectif:</label>
                    <input type="text" name="address" id="address" required />
                </div>
                <input type="reset" value="Reset All" className="submit" name="reset" id="reset" />
                <input type="submit" className="submit" onClick={submitForm} name="submit" id="submit" />
            </form>
        </div>
    )
}

export default Form2;
