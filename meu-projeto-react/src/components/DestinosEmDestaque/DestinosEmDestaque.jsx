import React, { useContext } from 'react';
import styles from './DestinosEmDestaque.module.css'; 
import parisImg from '../../assets/eiffel_tour_0.jpg';
import londresImg from '../../assets/pontos-turisticos-de-londres-blog-ua-br.jpg';
import novayorkImg from '../../assets/morar-em-nova-york.jpg';
import tokioImg from '../../assets/tokio.jpg';
import rioImg from '../../assets/rio.jpg';
import gramadoImg from '../../assets/gramado.png';
import carrinhoImg from '../../assets/carrinho.png';
import { carrinhoContext } from '../../context/carrinhocontext';

const destinos = [
    { id: 1, nome: "Paris - França", imagem: parisImg, preco: 3500 },
    { id: 2, nome: "Londres - Inglaterra", imagem: londresImg, preco: 4200 },
    { id: 3, nome: "Nova York - Estados Unidos", imagem: novayorkImg, preco: 5000 },
    { id: 4, nome: "Tóquio - Japão", imagem: tokioImg, preco: 6000 },
    { id: 5, nome: "Rio de Janeiro - Brasil", imagem: rioImg, preco: 3800},
    { id: 6, nome: "Gramado - Brasil", imagem: gramadoImg, preco: 7200 }
];

function DestinosEmDestaque() {
    const { adicionarItens } = useContext(carrinhoContext);

    return (
        <div className={styles.destinosGrid}>
            {destinos.map(destino => (
                <div key={destino.id} className={styles.destinationCard}>
                    <img src={destino.imagem} alt={destino.nome} className={styles.image} />
                    <p>{destino.nome}</p>      
                    <p className={styles.preco}>R$ {destino.preco}</p>
                    <button onClick={() => { adicionarItens(destino);
                    alert(`A viagem para "${destino.nome}" foi adicionado ao carrinho!`);
                    }}
                    className={styles.carrinhoButton} >
                    <img src={carrinhoImg} alt="Adicionar ao Carrinho" className={styles.carrinhoImg} />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default DestinosEmDestaque;