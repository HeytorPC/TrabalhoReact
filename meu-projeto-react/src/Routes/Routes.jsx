import React from 'react';
import { Routes, Route } from "react-router-dom";
import Principal from "../pages/principal/PrincipalPage"; //Não pode por chaves nessa importação
import Login from "../pages/login/LoginPage";
import Layout from "../Layout/Layout"; 
import Carrinho from "../pages/carrinho/Carrinho";
import Produtos from "../pages/produtos/Produtos";
import Sobre from "../pages/sobre/Sobre";

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Principal />} />
        <Route path="principal" element={<Principal />} />
        <Route path="login" element={<Login />} />
        <Route path="carrinho" element={<Carrinho/>} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="sobre" element={<Sobre />} />
      </Route>
    </Routes>
  );
}
