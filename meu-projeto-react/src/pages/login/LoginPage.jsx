import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './Login.module.css';
import User from '/src/assets/user_login_man-512.png';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleCadastrarClick = () => {
    navigate('/cadastro');
  };

  const handleLoginClick = () => {
    if (!email.includes('@')) {
      setMensagemErro('Por favor, insira um email válido com "@"');
      return;
    }
    if (senha === '') {
      setMensagemErro('A senha não pode estar vazia');
      return;
    }
    setMensagemErro('');
    console.log('Login efetuado com sucesso!');
  };

  return (
    <div className={Styles.containerPrincipal}>
      <div className={Styles.container}>
        <div className={Styles.Cadastro}>
          <img className={Styles.User} src={User} alt='user' />
          <h2>Sejam bem-vindos</h2>
          <input
            type="text"
            className={Styles.email}
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className={Styles.senha}
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {mensagemErro && <p className={Styles.error}>{mensagemErro}</p>}
          <button type="button" className={Styles.Botao} onClick={handleLoginClick}>Logar</button>
          <button type="button" className={Styles.Botao} onClick={handleCadastrarClick}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
}


