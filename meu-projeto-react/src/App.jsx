import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Rotas } from './Routes/Routes'; // Atualize o caminho aqui
import { CarrinhoProvider } from './context/carrinhocontext';

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
