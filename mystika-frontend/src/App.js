import './App.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import MyData from './components/MyData';
import Consultant from './components/Consultant';
import Login from './components/Login';
import Register from './components/Register'; 

function App() {
  const isDesktop = useMediaQuery({ query: '(max-width: 670px)' });
  const location = useLocation();

  
  const noHeaderRoutes = ['/login', '/register'];
  const showHeader = !noHeaderRoutes.includes(location.pathname);

  return (
    <div className="App">
      {showHeader && (isDesktop ? <HeaderMobile /> : <Header />)}
      <Routes>
        <Route path="/" element={<Navigate to="/consultores" />} />
        <Route path="/consultores" element={<Home />} />
        <Route path="/meus-dados" element={<MyData />} />
        <Route path="/consultor/:id" element={<Consultant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
