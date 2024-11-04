import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Rotas } from './Routes/Routes'; // Atualize o caminho aqui

function App() {
  return (
    <Router>
      <Rotas />
    </Router>
  );
}

export default App;
