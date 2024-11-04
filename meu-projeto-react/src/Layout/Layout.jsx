import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/NavBar";


export function Layout() {
    return (
      <>
        <Navbar/>
        <main>
          <Outlet/>
        </main>
        <footer>Aqui é o meu footer</footer>
      </>
    );
  }