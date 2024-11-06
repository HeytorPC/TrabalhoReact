import React from 'react';
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';

export function Layout() {
  return (
    <>
      {/* <Navbar /> tava duplicando a NavBar ai preferimos comentar do que excluir */}
      <main>
        <Outlet />
      </main>
        <Footer/>
    </>
  );
}


