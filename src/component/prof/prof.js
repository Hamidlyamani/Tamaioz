import React, { useState, useEffect } from 'react';
import './prof.css';
import Cardprof from '../sections/cardprof';
import axios from 'axios';

function Prof() {
  const [profs, setProfs] = useState([]);
  const [filteredProfs, setFilteredProfs] = useState([]);
  const [data, setData] = useState({ matier: '', ville: '' });
  const [ps, setPs] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost/tamaioz/allprofs.php', {});
      setProfs(response.data);
      setFilteredProfs(response.data); //
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleclick = (e) => {
    e.preventDefault();
 
    const newFilteredProfs = profs.filter((item) =>
      item.villeprof === data.ville && item.matier_m === data.matier
    );
    setFilteredProfs(newFilteredProfs);
   
    setPs(true);
  };

  return (
    <div>
      <div className="recherch container">
        <div className="titre">Trouvez le professeur parfait</div>
        <form className="search">
          <div className="group-form">
            <label htmlFor="matier">Matier:</label>
            <select name="matier" value={data.matier} onChange={handleChange}>
              <option value="-------">-------</option>
              <option value="Anglais">Anglais</option>
              <option value="Mathématique">Mathématique</option>
              <option value="Français">Français</option>
              <option value="Physique">Physique</option>
            </select>
          </div>
          <div className="group-form">
            <label htmlFor="ville">Villes:</label>
            <select name="ville" value={data.ville} onChange={handleChange}>
              <option value="-------">-------</option>
              <option value="Marrakech">Marrakech</option>
              <option value="Agadir">Agadir</option>
              <option value="Casablanca">Casablanca</option>
              <option value="Tanger">Tanger</option>
            </select>
          </div>
          <div className="group-form">
            <button className="rechecher" onClick={handleclick}>
              Rechercher
            </button>
          </div>
        </form>
      </div>

      <p style={{ textAlign: 'center' }}>
        {filteredProfs.length > 0 && ps && (
          <h5>
            Les professeurs de{' '}
            <span style={{ color: '#8300e3', fontWeight: 900 }}>
              {data.matier}
            </span>{' '}
            à{' '}
            <span style={{ color: '#8300e3', fontWeight: 900 }}>
              {data.ville}
            </span>
          </h5>
        )}
      </p>

      <div className="container cards_profs">
        {filteredProfs.length > 0 ? (
          filteredProfs.map((prof) => (
            <Cardprof
              key={prof.idprof}
              id={prof.idprof}
              image={prof.img}
              nom={prof.nomprof}
              ville={prof.villeprof}
              matier={prof.matier_m}
              avis="30"
            />
          ))
        ) : (
          <h3 style={{ color: '#8300e3', textAlign: 'center' }}>
            Aucun Professeurs trouvés pour{' '}
            <span style={{ color: '#8300e3', fontWeight: 900 }}>
              {data.matier}
            </span>{' '}
            à{' '}
            <span style={{ color: '#8300e3', fontWeight: 900 }}>
              {data.ville}
            </span>
          </h3>
        )}
      </div>
    </div>
  );
}

export default Prof;