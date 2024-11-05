import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Rotas } from './Routes/Routes'; 
import { CarrinhoProvider } from './context/carrinhocontext';
import Carrinho from './pages/carrinho/Carrinho';

function App() {
  return (
    <CarrinhoProvider>
      <Router>
        <Rotas />
      </Router>
    </CarrinhoProvider>
  );
}

export default App;
