import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Form1 = (props) => {
    const handleIconClickInsideComponent = () => {
        props.handleNextStep();
    };
    const handleIconClickInsideComponent2 = () => {
        props.handleIconClickInsideComponent2();
    };
    const [data, setData] = useState({
        name: "",
        phone: "",
        ville: "",
        sexe: "",
        email: "",
        motpass: "",
        adresse: "",
    })

    // const [dataR, setdataR] = useState([]);
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        // console.log(data)

    }

    const submitForm = (e) => {
        e.preventDefault();

        const dataSend = {
            name: data.name,
            phone: data.phone,
            ville: data.ville,
            sexe: data.sexe,
            email: data.email,
            password: data.motpass,
            adresse: data.adresse,
        }
        // console.log(dataSend);

        axios.post('http://localhost/tamaioz/test.php', dataSend)
            .then((response) => {
                const responseData = response.data.data1.status;
           
            //JSON.parse( You can now use the 'id' variable in your React component
                console.log(responseData);
            // console.log(dataR)
                sessionStorage.setItem('iduser', responseData);
            // eslint-disable-next-line no-unused-expressions
                props.detail2 === 'detail' ? handleIconClickInsideComponent() : handleIconClickInsideComponent2();
        });
        // console.log(dataR);
        setData({
            name: "",
            phone: "",
            ville: "",
            sexe: "",
            email: "",
            motpass: "",
            adresse: "",
        });
       
    }
    // useEffect(() => {

    //     if (dataR.length > 0) {
            
    //         // console.log(dataR);
          
    //     }

    // }, [data]);


    return (
        <div>
            <form method="POST" onSubmit={submitForm} className="register-form" id="register-form">
               
                <div className="form-row">
                    <div className="form-group"> <label htmlFor="ville">Nom Complete :</label>
                        <input type="text" name="name" placeholder='Votre nom complet' value={data.name} onChange={handleChange} id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ville">Numero de telephone :</label>
                        <input type='number' name="phone" onChange={handleChange} id="phone" required placeholder='numéro de téléphone' value={data.phone} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="ville">ville :</label>
                        <div className="form-select">
                            <select name="ville" id="state1" onChange={handleChange} value={data.ville}>

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
                        <label htmlFor="sexe">Sexe:</label>
                        <div className="form-select">
                            <select name="sexe" id="state" onChange={handleChange} value={data.sexe}>

                                <option value="Masculin">Masculin
                                </option>
                                <option value="Féminin">Féminin</option>
                            </select>
                            <span className="select-icon"><i className="zmdi zmdi-chevron-down"></i></span>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="ville">Email :</label>
                        <input type="email" name="email" id="father_name" placeholder='Votre adresse e-mail' onChange={handleChange} required value={data.email} />

                    </div>
                    <div className="form-group"> <label htmlFor="ville">Mot de passe :</label>
                        <input type="password" name="motpass" id="address" placeholder='Votre mot de passe' onChange={handleChange} required value={data.motpass} />

                    </div>
                </div>
                <div className="form-group"> <label htmlFor="ville">Adresse :</label>
                    <input type="text" name="adresse" id="ville" onChange={handleChange} value={data.adresse} required placeholder='Votre adresse' />

                </div>

                <input type="reset" value="Reset All" className="submit" name="reset" id="reset" />
                <input type="submit" className="submit" onClick={submitForm} name="submit" id="submit" />





            </form>
        </div >
    )
}

export default Form1
