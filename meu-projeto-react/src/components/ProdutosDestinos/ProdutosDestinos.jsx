import React, { useContext } from "react";
import styles from './ProdutosDestinos.module.css'; 
import parisImg from '../../assets/eiffel_tour_0.jpg'; 
import londresImg from '../../assets/pontos-turisticos-de-londres-blog-ua-br.jpg'; 
import novayorkImg from '../../assets/morar-em-nova-york.jpg'; 
import tokioImg from '../../assets/tokio.jpg';  
import rioImg from '../../assets/rio.jpg';  
import capadociaImg from '../../assets/capadocia.jpg';  
import catarImg from '../../assets/catar.jpg';  
import egitoImg from '../../assets/egito.jpg';  
import espanhaImg from '../../assets/espanha.jpg';  
import greciaImg from '../../assets/grecia.jpg';
import italiaImg from '../../assets/italia.jpg';
import peruImg from '../../assets/peru.jpg';
import suicaImg from '../../assets/suica.jpg';
import gramadoImg from '../../assets/gramado.png';
import maldivasImg from '../../assets/maldivas.jpg';
import mexicoImg from '../../assets/mexico.jpg';
import chileImg from '../../assets/chile.jpg';
import saopauloImg from '../../assets/saopaulo.jpg';
import carrinhoImg from '../../assets/carrinho.png';
import { carrinhoContext } from "../../context/carrinhocontext";





const produtosDestinos = [

    { id: 1, nome: "Paris - França", imagem: parisImg, preco: 3500 },
    { id: 2, nome: "Londres - Inglaterra", imagem: londresImg, preco: 4200 },
    { id: 3, nome: "Nova York - Estados Unidos", imagem: novayorkImg, preco: 5000 },
    { id: 4, nome: "Tóquio - Japão", imagem: tokioImg, preco: 6000 },
    { id: 5, nome: "Rio de Janeiro - Brasil", imagem: rioImg, preco: 3800 },
    { id: 6, nome: "Gramado - Brasil", imagem: gramadoImg, preco:  7200 },
    { id: 7, nome: "Capadócia - Turquia", imagem: capadociaImg, preco: 6500 },
    { id: 8, nome: "Doha - Catar", imagem: catarImg, preco: 7000 },
    { id: 9, nome: "Cairo - Egito", imagem: egitoImg, preco: 6000 },
    { id: 10, nome: "Madrid - Espanha", imagem: espanhaImg, preco: 5800 },
    { id: 11, nome: "Santorini - Grécia", imagem: greciaImg, preco: 7500 },
    { id: 12, nome: "Roma - Itália", imagem: italiaImg, preco: 7000 },
    { id: 13, nome: "Machu Picchu - Peru", imagem: peruImg, preco: 7800 },
    { id: 14, nome: "Berna - Suíça", imagem: suicaImg, preco: 85000 },
    { id: 15, nome: "Malé - Maldivas", imagem: maldivasImg, preco: 10000 },
    { id: 16, nome: "Acapulco - México", imagem: mexicoImg, preco: 4000 },
    { id: 17, nome: "Santiago - Chile", imagem: chileImg, preco: 5000 },
    { id: 18, nome: "São Paulo - Brasil", imagem: saopauloImg, preco: 3000 }

];

export function ProdutosDestinos() {

    const { adicionarItens, itensCarrinho } = useContext(carrinhoContext)

    return (
        <div className={styles.destinosGrid}>
            {produtosDestinos.map(destino => (
                <div key={destino.id} className={styles.destinationCard}>
                    <img src={destino.imagem} alt={destino.nome} className={styles.image} />
                        <p>{destino.nome}</p>
                        <p className={styles.preco}>R$ {destino.preco}</p>
                    <button onClick={() => adicionarItens(destino)} className={styles.carrinhoBtn}>
                        <img src={carrinhoImg} alt="Carrinho" className={styles.carrinhoImg} />
                    </button>
                </div>
            ))}
        </div>
    );
}



