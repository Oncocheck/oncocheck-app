import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Administrador from './administrador';
import GerenciarExames from './gerenciar/gerenciar-exames';
import GerenciarUsuarios from './gerenciar/gerenciar-usuarios';
import ConsultarInconsistencias from './gerenciar/consultar-inconsistencias';

const AdminRoutes = () => (
  <Routes>
    <Route index element={<Administrador />} />
    <Route path="exames" element={<GerenciarExames />} />
    <Route path="usuarios" element={<GerenciarUsuarios />} />
    <Route path="inconsistencias" element={<ConsultarInconsistencias />} />
  </Routes>
);

export default AdminRoutes;
