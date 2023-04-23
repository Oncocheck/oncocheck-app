import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './screens/login';
import AdminRoutes from './screens/admin';
import UserRoutes from './screens/user';

function Index() {
    return (
    <div className='screen'>
        <Router>
            <Routes>
                <Route index element={<Login />} />
                <Route path='admin/*' element={<AdminRoutes />} />
                <Route path=':user/*' element={<UserRoutes />} />
            </Routes>
        </Router>
    </div>
    );
}

export default Index;