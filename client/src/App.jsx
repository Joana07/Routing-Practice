import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import StyledWord from './components/StyledWord';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/4" element={<Number number={isNaN(4) ? 0 : 4} />} />
        <Route path="/hello" element={<Word word="Hello" />} />
        <Route path="/:word/:color/:background" element={<StyledWord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



