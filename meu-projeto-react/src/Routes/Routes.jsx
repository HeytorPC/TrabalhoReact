import React from 'react';
import { Routes, Route } from "react-router-dom";
import Principal from "../pages/principal/PrincipalPage"; //Não pode por chaves nessa importação
import Login from "../pages/login/LoginPage";
import Layout from "../Layout/Layout"; 

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Principal />} />
        <Route path="principal" element={<Principal />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
