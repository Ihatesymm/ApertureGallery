import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

function App() {
  return (
    <div className="relative z-0 top-0 inset-x-0 bg-gradient-to-bl from-backgroundtop to-backgroundbottom h-screen w-screen">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<></>}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
