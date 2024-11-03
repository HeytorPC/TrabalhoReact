import React from 'react';
import styles from './Home.module.css';
import bannerHome from '/src/assets/bannerHome.jpg'


function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.banner}>
      <img src={bannerHome} alt="bannerHome" className={styles.bannerHome} /> 
       
      </div>
      <h2 className={styles.destinos}>
        Destinos em Destaque</h2>
      <div className={styles.destinationsGrid}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className={styles.destinationCard}>
            <div className={styles.imagePlaceholder}>+</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;