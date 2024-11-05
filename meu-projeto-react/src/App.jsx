import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Rotas } from './Routes/Routes'; 
import { CarrinhoProvider } from '../src/context/carrinhoContext';

function App() {
  return (
    <>
    <CarrinhoProvider></CarrinhoProvider>
    
    <Router>
      <Rotas />
    </Router>
    </>
  );
}

export default App;
