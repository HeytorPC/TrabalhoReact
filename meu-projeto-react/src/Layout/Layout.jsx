import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>Aqui é o meu footer</footer>
    </>
  );
}

export default Layout;
