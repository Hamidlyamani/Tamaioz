import React from 'react'
import './listprof.css';

function Listprofs(props) {
  return (
      <div className = 'listeprof'>
        
      <div className='liste'>
              <h5>les professeurs</h5>
     <table className='listprof'>
          <tr><th>Id de prof</th><th>Nom et prenom</th><th>Matier</th><th>Numero de telephone</th><th>Email</th></tr>
          <tr><td>234 </td><td>{props.data[2]}</td><td>{props.data[5]}</td><td>{props.data[3]}</td><td>{props.data[4]}</td></tr>
     </table>
      </div>
    </div>
  )
}

export default Listprofs
