import React, { useState } from 'react';
import Styles from './Cadastro.module.css';
import User from '/src/assets/cadastro.png';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  
  // Novos estados para o endereço
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');

  const handleCadastroClick = () => {
    if (cpf.length !== 11) {
      setMensagemErro('O CPF deve conter 11 dígitos');
      return;
    }
    if (!email.includes('@')) {
      setMensagemErro('Por favor, insira um email válido com "@"');
      return;
    }
    if (email !== confirmarEmail) {
      setMensagemErro('Os emails não correspondem');
      return;
    }
    if (senha !== confirmarSenha) {
      setMensagemErro('As senhas não correspondem');
      return;
    }

    setMensagemErro(''); 
    console.log('Cadastro efetuado com sucesso!');
  };

  return (
    <div className={Styles.containerPrincipal}>
      <div className={Styles.container}>
        <div className={Styles.Cadastro}>
          <img className={Styles.User} src={User} alt='user' />
          <h2>Cadastro</h2>
          <input type="text" className={Styles.nome} placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type="text" className={Styles.email} placeholder="Digite seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
          <input type="text" className={Styles.email} placeholder="Digite seu telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          <input type="text" className={Styles.email} placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" className={Styles.email} placeholder="Confirme seu email" value={confirmarEmail} onChange={(e) => setConfirmarEmail(e.target.value)} />
          <input type="password" className={Styles.senha} placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          <input type="password" className={Styles.senha} placeholder="Confirme sua senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
          {mensagemErro && <p className={Styles.error}>{mensagemErro}</p>}
          <button type="button" className={Styles.Botao} onClick={handleCadastroClick}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
