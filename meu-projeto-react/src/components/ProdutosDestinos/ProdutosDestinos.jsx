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
import { carrinhoContext } from "../../context/carrinhoContext";

const produtosDestinos = [
    { id: 1, nome: "Paris - França", imagem: parisImg, preco: 3500, descricao: "Explore a Cidade Luz e seus monumentos icônicos." },
    { id: 2, nome: "Londres - Inglaterra", imagem: londresImg, preco: 4200, descricao: "Descubra o charme dos pontos turísticos londrinos." },
    { id: 3, nome: "Nova York - Estados Unidos", imagem: novayorkImg, preco: 5000, descricao: "Viva a agitação da Big Apple e seus arranha-céus." },
    { id: 4, nome: "Tóquio - Japão", imagem: tokioImg, preco: 6000, descricao: "Experimente a cultura e modernidade vibrante de Tóquio." },
    { id: 5, nome: "Rio de Janeiro - Brasil", imagem: rioImg, preco: 3800, descricao: "Aprecie as paisagens e praias da cidade maravilhosa." },
    { id: 6, nome: "Gramado - Brasil", imagem: gramadoImg, preco: 7200, descricao: "Encante-se com o charme e clima europeu de Gramado." },
    { id: 7, nome: "Capadócia - Turquia", imagem: capadociaImg, preco: 6500, descricao: "Voe de balão sobre as formações rochosas únicas." },
    { id: 8, nome: "Doha - Catar", imagem: catarImg, preco: 7000, descricao: "Descubra o luxo e modernidade no coração do Catar." },
    { id: 9, nome: "Cairo - Egito", imagem: egitoImg, preco: 6000, descricao: "Veja as pirâmides e explore a história antiga." },
    { id: 10, nome: "Madrid - Espanha", imagem: espanhaImg, preco: 5800, descricao: "Aproveite a cultura vibrante e a culinária espanhola." },
    { id: 11, nome: "Santorini - Grécia", imagem: greciaImg, preco: 7500, descricao: "Admire as casas brancas e o pôr do sol deslumbrante." },
    { id: 12, nome: "Roma - Itália", imagem: italiaImg, preco: 7000, descricao: "Explore ruínas antigas e experimente a culinária italiana." },
    { id: 13, nome: "Machu Picchu - Peru", imagem: peruImg, preco: 7800, descricao: "Descubra a misteriosa cidade inca nas montanhas." },
    { id: 14, nome: "Berna - Suíça", imagem: suicaImg, preco: 8500, descricao: "Encante-se com as paisagens e os Alpes suíços." },
    { id: 15, nome: "Malé - Maldivas", imagem: maldivasImg, preco: 10000, descricao: "Relaxe em praias paradisíacas com águas cristalinas." },
    { id: 16, nome: "Acapulco - México", imagem: mexicoImg, preco: 4000, descricao: "Desfrute do clima tropical e das praias mexicanas." },
    { id: 17, nome: "Santiago - Chile", imagem: chileImg, preco: 5000, descricao: "Experimente a cultura e as paisagens dos Andes." },
    { id: 18, nome: "São Paulo - Brasil", imagem: saopauloImg, preco: 3000, descricao: "Viva a agitação da maior cidade do Brasil." }
];

export function ProdutosDestinos() {
    const { adicionarItens } = useContext(carrinhoContext);

    return (
        <div className={styles.destinosGrid}>
            {produtosDestinos.map(destino => (
                <div key={destino.id} className={styles.destinationCard}>
                    <img src={destino.imagem} alt={destino.nome} className={styles.image} />
                    <p>{destino.nome}</p>
                    <p className={styles.descricao}>{destino.descricao}</p>
                    <p className={styles.preco}>R$ {destino.preco}</p>
                    <button 
                        onClick={() => { 
                            adicionarItens(destino);
                            alert(`A viagem para "${destino.nome}" foi adicionada ao carrinho!`);
                        }}
                        className={styles.carrinhoBtn} 
                    >
                        <img src={carrinhoImg} alt="Carrinho" className={styles.carrinhoImg} />
                    </button>
                </div>
            ))}
        </div>
    );
}
