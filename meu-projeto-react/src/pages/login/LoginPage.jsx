import React from 'react';
import Styles from './Login.module.css';
import User from '/src/assets/User.png';

function Login(Props) {
  return (
    <>
      <div className={Styles.containerPrincipal}>
      <div className={Styles.container}>
        <div className={Styles.Cadastro}>
          <img className={Styles.User} src={User} alt='user' />
          <h2>Sejam bem-vindos</h2>
          <input type="text" id="nome" className={Styles.nome} placeholder="Digite seu nome" />
          <input type="text" id="email" className={Styles.email} placeholder="Digite seu email" />
          <input type="text" id="email" className={Styles.email} placeholder="Confirme seu email" />
          <input type="password" id="senha" className={Styles.senha} placeholder="Digite sua senha" />
          <button type="button" className={Styles.Botao}>Logar</button>
          <button type="button" className={Styles.Botao}>Cadastrar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
