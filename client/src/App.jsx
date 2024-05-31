<<<<<<< HEAD
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



=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchdata = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(res => {
        setPokemons(res.data.results);
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <button onClick={fetchdata}>Fetch Pokemon {pokemons.length}</button>
      <div>
        <ul>
          {pokemons.map((pokemon, index) => 
            <li key={index}>{pokemon.name}</li>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
>>>>>>> origin/main
