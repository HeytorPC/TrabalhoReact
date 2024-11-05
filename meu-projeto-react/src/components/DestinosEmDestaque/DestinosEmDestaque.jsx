import React from 'react';
import styles from './DestinosEmDestaque.module.css'; 
import parisImg from '../../assets/eiffel_tour_0.jpg';
import londresImg from '../../assets/pontos-turisticos-de-londres-blog-ua-br.jpg';
import novayorkImg from '../../assets/morar-em-nova-york.jpg';
import tokioImg from '../../assets/tokio.jpg';
import rioImg from '../../assets/rio.jpg';
import gramadoImg from '../../assets/gramado.png';
import carrinhoImg from '../../assets/carrinho.png';


const destinos = [
    { id: 1, nome: "Paris - França", imagem: parisImg, preco: "R$ 3.500" },
    { id: 2, nome: "Londres - Inglaterra", imagem: londresImg, preco: "R$ 4.200" },
    { id: 3, nome: "Nova York - Estados Unidos", imagem: novayorkImg, preco: "R$ 5.000" },
    { id: 4, nome: "Tóquio - Japão", imagem: tokioImg, preco: "R$ 6.000" },
    { id: 5, nome: "Rio de Janeiro - Brasil", imagem: rioImg, preco: "R$ 3.800" },
    { id: 6, nome: "Gramado - Brasil", imagem: gramadoImg, preco: "R$ 7.200" }
];

function DestinosEmDestaque() {
    return (
        <div className={styles.destinosGrid}>
            {destinos.map(destino => (
                <div key={destino.id} className={styles.destinationCard}>
                    <img src={destino.imagem} alt={destino.nome} className={styles.image} />
                    <p>{destino.nome}</p>      
                    <p className={styles.preco}>{destino.preco}</p>
                    <img src={carrinhoImg} alt="Carrinho" className={styles.carrinhoImg} />
                </div>
            ))}
        </div>
    );
}

export default DestinosEmDestaque;
