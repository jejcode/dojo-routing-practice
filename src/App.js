import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Input from './components/Input';
import Index from './components/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:input" element={<Input />}/>
        <Route path="/:input/:text/:bg" element={<Input />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
