import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Login';

const LoginRoutes = () => (
    <Routes>
        <Route index element={<Login />} />
    </Routes>
);

export default LoginRoutes;
