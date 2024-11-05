import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Principal} from "../pages/principal/PrincipalPage"; 
import {Login} from "../pages/login/LoginPage";
import {Layout} from "../Layout/Layout"; 
import {Carrinho} from "../pages/carrinho/Carrinho";
import {Produtos} from "../pages/produtos/Produtos";
import {Sobre} from "../pages/sobre/Sobre";
import {NotFound} from "../pages/notFound/NotFound";
import {Cadastro} from '../pages/cadastro/Cadastro';

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
        <Route path="cadastro" element={<Cadastro />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
