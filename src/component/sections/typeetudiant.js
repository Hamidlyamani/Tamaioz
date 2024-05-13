import './typeetudiant.css';
import React from 'react'



export default function Typeetudiant(props) {
    return (
        <div className="Typeetudiant Type22 container">
            <div className='description'>
                <div className='titre'>{props.titre}</div>
                <div className='text'>{props.text} </div>
            </div>
            <div className='image'>
                <img src={props.image} alt='image2 apprenent' />
            </div>

        </div>
    );
}

export   function Type22(props) {
    return (
        <div className="Typeetudiant container">
            <div className='image'>
                <img src={props.image} alt='image2 apprenent' />
            </div>
            <div className='description'>
                <div className='titre'>{props.titre}</div>
                <div className='text'>{props.text} </div>
            </div>
        </div>
    );
}
  