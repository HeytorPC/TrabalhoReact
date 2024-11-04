import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar/NavBar';
import { Footer } from './components/Navbar/Footer/Footer';
import DestinosEmDestaque from './components/DestinosEmDestaque/DestinosEmDestaque'; 

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Destinos em Destaque</h2>
      <DestinosEmDestaque /> 
      <Footer />
    </>
  );
}

export default App;
