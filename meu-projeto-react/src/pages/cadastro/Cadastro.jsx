import React from 'react';
import Styles from './Cadastro.module.css';
import User from '/src/assets/cadastro.png';

function Cadastro(Props) {
  return (
    <>
      <div className={Styles.containerPrincipal}>
      <div className={Styles.container}>
        <div className={Styles.Cadastro}>
          <img className={Styles.User} src={User} alt='user' />
          <h2>Cadastro</h2>
          <input type="text" id="nome" className={Styles.nome} placeholder="Digite seu nome" />
          <input type="text" id="CPF" className={Styles.email} placeholder="Digite seu CPF" />
          <input type="text" id="telefone" className={Styles.email} placeholder="Digite seu telefone" />
          <input type="text" id="endereço" className={Styles.email} placeholder="Digite seu endereço" />
          <input type="text" id="email" className={Styles.email} placeholder="Digite seu email" />
          <input type="text" id="email" className={Styles.email} placeholder="Confirme seu email" />
          <input type="password" id="senha" className={Styles.senha} placeholder="Digite sua senha" />
          <input type="password" id="senha" className={Styles.senha} placeholder="Confirme sua senha" />
          <button type="button" className={Styles.Botao}>Cadastrar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
