import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './App.css';
import MyRoutes from './MyRoutes';
import Preloader from './component/Preloader';
import { Provider } from 'react-redux';
import { store, persistor } from './lib/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3800);
  }, []);

  return (
    <Provider store={store}>
      <ToastContainer position="bottom-right" autoClose={5000}
      />
      <PersistGate persistor={persistor}>
        {isLoading ? (
          <Preloader />
        ) : (
          <Router>
            <MyRoutes />
          </Router>)}
      </PersistGate>
    </Provider>
  );
}

export default App;
