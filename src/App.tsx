import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/Dashboard/DashBoard';
import Regist from './pages/Registerpage/Regist';
import Login from './pages/loginPage/Login';
import Cart from './pages/Cart/Cart';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrasi" element={<Regist />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
