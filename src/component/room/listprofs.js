import React from 'react'
import './listprof.css';
import { toast } from 'react-toastify';




function Listprofs(props) {
  if (!props.data) {
    toast.error('Pas encore de professeurs dans votre liste. Recherchez et ajoutez un professeur dès maintenant.');
    return <div className='listeprof'>Vous n'avez pas aucun professeur encore</div>;
  }

  return (
    <div className='listeprof'>
      <div className='liste'>
        <h5>Les Professeurs</h5>
        <table className='listprof'>
          <thead>
            <tr>
              <th>Id de prof</th>
              <th>Nom et prénom</th>
              <th>Matière</th>
              <th>Numéro de téléphone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.data[0]}</td>
              <td>{props.data[1]}</td>
              <td>{props.data[4]}</td>
              <td>{props.data[2]}</td>
              <td>{props.data[3]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* } */}
    </div>
  )
}

export default Listprofs
