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