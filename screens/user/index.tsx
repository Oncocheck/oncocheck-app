import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './main-page';
import PesquisaListagem from './pesquisa/pesquisa-listagem';
import DetalhesPesquisa from './pesquisa/detalhes-pesquisa';
import Inconsistencia from './pesquisa/incosistencia';
import Favoritos from './favoritos';

const UserRoutes = () => (
  <Routes>
    <Route index element={<MainPage />} />
    <Route path=":pesquisa">
      <Route index element={<PesquisaListagem />} />
      <Route path=":detalhe">
        <Route index element={<DetalhesPesquisa />} />
        <Route path="inconsistencia" element={<Inconsistencia />} />
      </Route>
    </Route>
    <Route path='favoritos' element={<Favoritos />} />
  </Routes>
);

export default UserRoutes;
