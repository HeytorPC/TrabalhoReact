import React, { useEffect, useState } from "react";
import Styles from "./Cadastro.module.css";
import User from "/src/assets/cadastro.png";
import api from "../../service/api";

export function Cadastro() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [data, setData] = useState([]); // Adicionando o estado para armazenar os dados dos clientes

  const handleTextChange = (text, setTexto) => {
    if (/[0-9]/.test(text)) {
      setMensagemErro("Este campo não pode conter números");
      return;
    } else {
      setMensagemErro("");
      setTexto(text);
    }
  };

  const [novoCliente, setNovoCliente] = useState({});

  useEffect(() => {
    api
      .get("/clientes")
      .then((response) => {
        setData(response.data); // Armazenando a resposta no estado data
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("endereco.")) {
      const enderecoField = name.split(".")[1];
      setNovoCliente((prev) => ({
        ...prev,
        endereco: {
          ...prev.endereco,
          [enderecoField]: value,
        },
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
    api
      .post("/clientes", novoCliente, {
        headers: {
          Authorization: `Basic ${btoa("guilherme:teste")}`,
          "Access-Control-Allow-Origin": "http://localhost:8080",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setData((prev) => [...prev, response.data]); // Adicionando o novo cliente aos dados existentes
      })
      .catch((error) => {
        console.error("Erro ao cadastrar cliente:", error);
      });
  };

  const handleCadastroClick = () => {
    if (cpf.length !== 11) {
      setMensagemErro("O CPF deve conter 11 dígitos");
      return;
    }
    if (!email.includes("@")) {
      setMensagemErro('Por favor, insira um email válido com "@"');
      return;
    }
    if (email !== confirmarEmail) {
      setMensagemErro("Os emails não correspondem");
      return;
    }
    if (senha !== confirmarSenha) {
      setMensagemErro("As senhas não correspondem");
      return;
    }

    if (cep.length !== 8) {
      setMensagemErro("O CEP deve conter 8 dígitos");
      return;
    }

    setMensagemErro("");
    console.log("Cadastro efetuado com sucesso!");

    setNovoCliente({
      nome: "",
      cpf: "",
      telefone: "",
      email: "",
      senha: "",
      endereco: {
        cep: "",
        rua: "",
        bairro: "",
        cidade: "",
        numero: "",
        complemento: "",
      },
    });
  };

  return (
    <form onSubmit={handleCadastroClick}>
      <div className={Styles.containerPrincipal}>
        <div className={Styles.container}>
          <div className={Styles.Cadastro}>
            <img className={Styles.User} src={User} alt="user" />
            <h2>Cadastro</h2>
            <input
              type="text"
              className={Styles.nome}
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="text"
              className={Styles.email}
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <input
              type="text"
              className={Styles.email}
              placeholder="Digite seu telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <input
              type="text"
              className={Styles.email}
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className={Styles.email}
              placeholder="Confirme seu email"
              value={confirmarEmail}
              onChange={(e) => setConfirmarEmail(e.target.value)}
            />
            <input
              type="password"
              className={Styles.senha}
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <input
              type="password"
              className={Styles.senha}
              placeholder="Confirme sua senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>

          <div className={Styles.Endereco}>
            <img className={Styles.User} src={User} alt="user" />
            <h2>Endereço</h2>
            <input
              type="text"
              className={Styles.nome}
              placeholder="CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <input
              type="text"
              className={Styles.nome}
              placeholder="Rua"
              value={rua}
              onChange={(e) => handleTextChange(e.target.value, setRua)}
            />
            <input
              type="text"
              className={Styles.nome}
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => handleTextChange(e.target.value, setBairro)}
            />
            <input
              type="text"
              className={Styles.nome}
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => handleTextChange(e.target.value, setCidade)}
            />
            <input
              type="number"
              className={Styles.nome}
              placeholder="Número Nº"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
            <input
              type="text"
              className={Styles.nome}
              placeholder="Complemento"
              value={complemento}
              onChange={(e) => handleTextChange(e.target.value, setComplemento)}
            />
            {mensagemErro && <p className={Styles.error}>{mensagemErro}</p>}
            <button type="submit" className={Styles.Botao}>
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
