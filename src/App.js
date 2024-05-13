import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './App.css';
import Accueil from './component/accueil/accuil.js'
import Prof from './component/prof/prof.js'
import Header from './component/sections/hedear'
import Fouter from './component/sections/fouter/foeter'
import About from './component/about/about'
import Connixion from './component/connexion/connexion';
import Registration from './component/regester/registar';
import Room from './component/room/room.js'
import Preloader from './component/Preloader';
import Detail from './component/detail.prof/detail-prof';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 3800); // Replace with your actual data fetching or initialization logic
  }, []);

  return (
    <div className="App1">
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          

            {window.location.pathname !== "/room" ? <Header /> : <></>}
          <Routes>
              
            <Route path='/' element={<Accueil />} />
            <Route path='/prof' element={<Prof />} />
            <Route path='/about' element={<About />} />
            <Route path='/Connixion' element={<Connixion />} />
            <Route path='/reg' element={<Registration />} />
            <Route path='/room' element={<Room />} />
              <Route path='/prof/detail/:id_P/:Nimg' element={<Detail />} />
          </Routes>
            {window.location.pathname !== "/room" ? <Fouter /> : <></>}
          
        </Router>)}
    </div>
  );
}

export default App;
