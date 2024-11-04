import React from 'react';
import styles from './Produtos.module.css';
import ProdutosDestinos from '../../components/ProdutosDestinos/ProdutosDestinos';

function Produtos() {
  return (

    <div className={styles.produtosContainer}>

    <h1 className={styles.produtos}>Pacotes de Viagens</h1>
    <ProdutosDestinos/>
    </div>
  );
}