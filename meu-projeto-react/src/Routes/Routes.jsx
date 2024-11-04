import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Produtos from "../pages/Produtos";
import Carrinho from "../pages/Carrinho";
import Login from "../pages/Login";

export function Rotas{}(
    
    
    return(
<>
<Routes>
<Route path="/" element={<Layout />}>

          <Route index element={<ContatoPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/pokemons" element={<Pokemons />} />
        </Route>
        <Route path="produtos" element={<ProdutoPage />} />
        <Route path="" element={<NotFoundPage />} />
        <Route path="/requisicao" element={<Requisicao />} />
      </Routes>
    </>
    )
   
)