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

    { id: 1, nome: "Paris - França", imagem: parisImg, preco: "R$ 6.000" },
    { id: 2, nome: "Londres - Inglaterra", imagem: londresImg, preco: "R$ 5.500" },
    { id: 3, nome: "Nova York - Estados Unidos", imagem: novayorkImg, preco: "R$ 8.000" },
    { id: 4, nome: "Tóquio - Japão", imagem: tokioImg, preco: "R$ 9.000" },
    { id: 5, nome: "Rio de Janeiro - Brasil", imagem: rioImg, preco: "R$ 4.500" },
    { id: 6, nome: "Gramado - Brasil", imagem: gramadoImg, preco: "R$ 3.500" },
    { id: 7, nome: "Capadócia - Turquia", imagem: capadociaImg, preco: "R$ 6.500" },
    { id: 8, nome: "Doha - Catar", imagem: catarImg, preco: "R$ 7.000" },
    { id: 9, nome: "Cairo - Egito", imagem: egitoImg, preco: "R$ 6.000" },
    { id: 10, nome: "Madrid - Espanha", imagem: espanhaImg, preco: "R$ 5.800" },
    { id: 11, nome: "Santorini - Grécia", imagem: greciaImg, preco: "R$ 7.500" },
    { id: 12, nome: "Roma - Itália", imagem: italiaImg, preco: "R$ 7.000" },
    { id: 13, nome: "Machu Picchu - Peru", imagem: peruImg, preco: "R$ 7.800" },
    { id: 14, nome: "Berna - Suíça", imagem: suicaImg, preco: "R$ 8.500" },
    { id: 15, nome: "Malé - Maldivas", imagem: maldivasImg, preco: "R$ 10.000" },
    { id: 16, nome: "Acapulco - México", imagem: mexicoImg, preco: "R$ 4.000" },
    { id: 17, nome: "Santiago - Chile", imagem: chileImg, preco: "R$ 5.000" },
    { id: 18, nome: "São Paulo - Brasil", imagem: saopauloImg, preco: "R$ 3.000" }

];

export function ProdutosDestinos() {

    const { adicionarItens, itensCarrinho } = useContext(carrinhoContext)

    return (
        <div className={styles.destinosGrid}>
            {produtosDestinos.map(destino => (
                <div key={destino.id} className={styles.destinationCard}>
                    <img src={destino.imagem} alt={destino.nome} className={styles.image} />
                        <p>{destino.nome}</p>
                        <p className={styles.preco}>{destino.preco}</p>
                    <button onClick={() => adicionarItens(destino)} className={styles.carrinhoBtn}>
                        <img src={carrinhoImg} alt="Carrinho" className={styles.carrinhoImg} />
                    </button>
                </div>
            ))}
        </div>
    );
}



