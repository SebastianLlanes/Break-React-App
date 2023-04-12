import React from 'react'
import { Route, Routes, BrowserRouter  } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Food from './pages/Food';
import Drinks from './pages/Drinks';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/drinks" element={<Drinks />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
