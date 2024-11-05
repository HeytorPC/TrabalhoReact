import React, { useEffect, useState } from 'react';
import styles from './Principal.module.css';
import bannerHome from '/src/assets/bannerHome.jpg';
import DestinosEmDestaque from '../../components/DestinosEmDestaque/DestinosEmDestaque';
import api from '../../services/api';

function Principal() { 
  const [data, setData] = useState([]);
  const [novoCliente, setNovoCliente] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
    email: '',
    endereco: {
      cep: '',
      rua: '',
      bairro: '',
      cidade: '',
      numero: '',
      complemento: ''
    }
  });

  useEffect(() => {
    api.get('/clientes')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('endereco.')) {
      const enderecoField = name.split('.')[1];
      setNovoCliente((prev) => ({
        ...prev,
        endereco: {
          ...prev.endereco,
          [enderecoField]: value,
        }
      }));
    } else {
      setNovoCliente((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/clientes', novoCliente, {
      headers: {
        'Authorization': `Basic ${btoa("Gustavo:teste")}`,
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    .then((response) => {
      setData((prev) => [...prev, response.data]);
      setNovoCliente({
        nome: '',
        cpf: '',
        dataNascimento: '',
        telefone: '',
        email: '',
        endereco: {
          cep: '',
          rua: '',
          bairro: '',
          cidade: '',
          numero: '',
          complemento: ''
        }
      });
    })
    .catch((error) => {
      console.error("Erro ao cadastrar cliente:", error);
    });
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.banner}>
        <img src={bannerHome} alt="bannerHome" className={styles.bannerHome} />
      </div>
      <h2 className={styles.destinos}>Destinos em Destaque</h2>
      <DestinosEmDestaque />

      <div>
        <h3>Dados da API:</h3>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.nome}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Cadastrar Novo Cliente</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="nome" 
            placeholder="Nome" 
            value={novoCliente.nome} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="cpf" 
            placeholder="CPF" 
            value={novoCliente.cpf} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="date" 
            name="dataNascimento" 
            placeholder="Data de Nascimento" 
            value={novoCliente.dataNascimento} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="tel" 
            name="telefone" 
            placeholder="Telefone" 
            value={novoCliente.telefone} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={novoCliente.email} 
            onChange={handleChange} 
            required 
          />
          <h4>Endereço</h4>
          <input 
            type="text" 
            name="endereco.cep" 
            placeholder="CEP" 
            value={novoCliente.endereco.cep} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="endereco.rua" 
            placeholder="Rua" 
            value={novoCliente.endereco.rua} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="endereco.bairro" 
            placeholder="Bairro" 
            value={novoCliente.endereco.bairro} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="endereco.cidade" 
            placeholder="Cidade" 
            value={novoCliente.endereco.cidade} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="endereco.numero" 
            placeholder="Número" 
            value={novoCliente.endereco.numero} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="endereco.complemento" 
            placeholder="Complemento" 
            value={novoCliente.endereco.complemento} 
            onChange={handleChange} 
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Principal;
