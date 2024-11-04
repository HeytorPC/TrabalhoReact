import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar/NavBar';

import DestinosEmDestaque from './components/DestinosEmDestaque/DestinosEmDestaque'; 
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Destinos em Destaque</h2>
      <DestinosEmDestaque /> 
      <Footer/>
    </>
  );
}

export default App;
