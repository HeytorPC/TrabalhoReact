import React from 'react';
import styles from './Principal.module.css';
import bannerHome from '/src/assets/bannerHome.jpg';
import DestinosEmDestaque from './src/components/DestinosEmDestaque/DestinosEmDestaque.jsx'; //DestinosEmDestaquesNãoTáImportando

function Principal() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.banner}>
        <img src={bannerHome} alt="Banner Home" className={styles.bannerHome} />
      </div>
      <h2 className={styles.destinos}>Destinos em Destaque</h2>
          <DestinosEmDestaque />
    </div>
  );
}
export default Principal;
