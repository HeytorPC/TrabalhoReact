import React from 'react';
import styles from './Sobre.module.css'; 
import adm1 from '../../assets/Sobre imagens/WhatsApp Image 2024-10-26 at 18.52.57.jpeg'; 
import adm2 from '../../assets/Sobre imagens/Guilherme.jpeg';
import adm3 from '../../assets/Sobre imagens/Heytor.png';
import adm4 from '../../assets/Sobre imagens/VictorHugo.jpeg';
import adm5 from '../../assets/Sobre imagens/Matheus.jpeg';
import adm6 from '../../assets/Sobre imagens/Julia.jpeg';

const administradores = [
  { id: 1, nome: 'Gabriel Siqueira', imagem: adm1, descricao: 'Programador Senior' },
  { id: 2, nome: 'Guilherme Senna', imagem: adm2, descricao: 'Mono Ornn e Fracassado' },
  { id: 3, nome: 'Heytor Cantelmo', imagem: adm3, descricao: 'Garoto de Programa (Não é TI) Analista de Banco de Dados'},
  { id: 4, nome: 'Victor Hugo Schuenck ', imagem: adm4, descricao: 'Marketeiro e corredor' },
  { id: 5, nome: 'Mateus Azevedo', imagem: adm5, descricao: 'General do Exercito Brasileiro' },
  { id: 6, nome: 'Julia Henriques', imagem: adm6, descricao: 'Gosto de API' },
];

function Sobre() {
  return (
    <div className={styles.sobreContainer}>
      <h1>Sobre Nós</h1>
      <p>
        Nossa agência de viagens se dedica a proporcionar experiências inesquecíveis aos nossos clientes.
        Oferecemos uma variedade de pacotes de viagens, consultoria personalizada e suporte total durante toda a sua jornada.
      </p>

      <h2>Nossos Administradores</h2>
      <div className={styles.administradoresGrid}>
        {administradores.map(adm => (
          <div key={adm.id} className={styles.administradorCard}>
            <img src={adm.imagem} alt={adm.nome} className={styles.admImage} />
            <h3>{adm.nome}</h3>
            <p>{adm.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sobre;
