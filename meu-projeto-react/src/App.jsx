import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Rotas } from './Routes/Routes'; 
import { CarrinhoProvider } from './context/carrinhocontext';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true); 
  };
  const handleLogout = () => {
    setIsAuthenticated(false); 
  };

  return (
    <CarrinhoProvider>
      <Router>
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Rotas isAuthenticated={isAuthenticated} onLogin={handleLogin} />
      </Router>
    </CarrinhoProvider>
  );
}

export default App;
