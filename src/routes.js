import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./componentes/Home";
import Produtos from "./componentes/Cadastro";
import Clientes from "./componentes/Cliente";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Produtos }  path="/produtos" />
           <Route component = { Clientes }  path="/clientes" />
       </BrowserRouter>
   )
}

export default Routes;