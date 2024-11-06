import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import logoVista from '../../assets/logoVista.png';
import loginIcon from '../../assets/user_login_man-512.png';
import carrinhoIcon from '../../assets/2611181.png';
import cadastroIcon from '../../assets/cadastro.png';

function Navbar({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleLogoutClick = () => {
    onLogout(); 
    navigate('/login'); 
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoVista} alt="Logo" className={styles.logoImage} onClick={() => handleNavigation('/principal')} />
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li onClick={() => handleNavigation('/')}>Home</li>
          <li onClick={() => handleNavigation('/sobre')}>Sobre</li>
          <li onClick={() => handleNavigation('/produtos')}>Produtos</li>
          <img src={carrinhoIcon} alt="Carrinho" className={styles.CarrinhoIcon} onClick={() => handleNavigation('/carrinho')} />
          {isAuthenticated ? (
            <li onClick={handleLogoutClick} className={styles.logout}>Logoff</li>
          ) : (
            <>
              <img src={loginIcon} alt="Login" className={styles.loginIcon} onClick={() => handleNavigation('/login')} />
              <img src={cadastroIcon} alt="Cadastro" className={styles.cadastroIcon} onClick={() => handleNavigation('/cadastro')} />
            </>
          )}
        </ul>
      </nav>
      <div className={styles.searchContainer}></div>
    </header>
  );
}

export default Navbar;
