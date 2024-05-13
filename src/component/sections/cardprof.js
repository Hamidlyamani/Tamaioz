import React from 'react'
import './cardprof.css'
import stars from '../../assets/stars.svg';
import { Link } from 'react-router-dom';

function Cardprof(props) {
   

      

// const id_p=props.id;



    return (
        <div className='card'>
            <div className='header'>
                <img src={require(`../../assets/${props.image}`)} alt='' />
                <div className='nom'>
                    <h5>{props.nom}</h5>
                  
                </div>
            </div>
            <div className='body_card'>
                <div className='info'>  <div className='discription'>{props.ville}</div><div className='discription'>{props.matier}</div></div>
                <div className='rate'>   <img src={stars} alt='' /><p>5 ({props.avis} avis)</p></div>
                
                <Link to={`/prof/detail/${props.id}/${props.image}`}>  <button className='savoir_plus'>savoir plus</button></Link>
            </div>


        </div>
    )
}

export default Cardprof
