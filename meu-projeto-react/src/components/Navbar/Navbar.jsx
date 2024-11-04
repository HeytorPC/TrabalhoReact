import React from 'react';
import styles from './Navbar.module.css';
import logoVista from '../../assets/logoVista.png';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoVista} alt="Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Produtos</li>
          <li>Carrinho</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Buscar..." />
        <button>🔍</button>
      </div>
    </header>
  );
}

export default Navbar;
