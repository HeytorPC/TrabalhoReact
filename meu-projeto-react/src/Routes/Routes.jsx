import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Principal } from '../pages/principal/PrincipalPage';
import { Login } from '../pages/login/LoginPage';
import { Layout } from '../Layout/Layout';
import {Carrinho} from '../pages/carrinho/Carrinho';
import { Produtos } from '../pages/produtos/Produtos';
import { Sobre } from '../pages/sobre/Sobre';
import { NotFound } from '../pages/notFound/NotFound';
import { Cadastro } from '../pages/cadastro/Cadastro';

export function Rotas({ isAuthenticated, onLogin }) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PrivateRoute isAuthenticated={isAuthenticated} component={<Principal />} />} />
        <Route path="principal" element={<PrivateRoute isAuthenticated={isAuthenticated} component={<Principal />} />} />
        <Route path="carrinho" element={<PrivateRoute isAuthenticated={isAuthenticated} component={<Carrinho />} />} />
        <Route path="login" element={<Login onLogin={onLogin} />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function PrivateRoute({ isAuthenticated, component }) {
  return isAuthenticated ? component : <Navigate to="/login" />;
}
