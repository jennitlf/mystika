
import './App.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import MyData from './components/MyData';
import Consultant from './components/Consultant';



function App() {

  const isDesktop = useMediaQuery({query: '(max-width: 670px)'});

  return (
    <Router>
      <div className="App">
        {isDesktop ? <HeaderMobile/> : <Header/>}
       
        <Routes>
          <Route path="/" element={<Navigate to="/consultores" />} />
          <Route path="/consultores" element={<Home/>} />
          <Route path="/meus-dados" element={<MyData/>}/>
          <Route path="/consultor/:id" element={<Consultant/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
