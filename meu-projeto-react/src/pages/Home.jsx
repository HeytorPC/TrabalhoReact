import React from 'react';
import styles from './Home.module.css';
import bannerHome from '/src/assets/bannerHome.jpg';
// import DestinosEmDestaque from '../../DestinosEmDestaque/DestinosEmDestaque';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.banner}>
        <img src={bannerHome} alt="bannerHome" className={styles.bannerHome} />
      </div>
      {/* <h2 className={styles.destinos}>Destinos em Destaque</h2>
      <DestinosEmDestaque />  - comentei pq estava duplicando o Destinos em Destaque!*/}
    </div>
  );
}

export default Home;
