import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [pokeName, setPokeName] = useState('')
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    attact: "",
    defense: "",
    type: "",
  })

  const fetchPokemon = function(){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(res => {
      setPokemon({
        name: pokeName,
        species: res.data.species.name,
        img: res.data.sprites.front_default,
        attact: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        type: res.data.types[0].type.name,
      })
      console.log(res.data);
    })
    .catch(() => {
      console.log('Xatolik!');
    })
  }
  return (
    <>
    <div className='searchArea'>
      <input
      className='search'
      type="text"
      onChange={e => setPokeName(e.target.value)}
       />
       <button onClick={fetchPokemon}>Search...</button>
    </div>

    <div className='resultCard'>
      <div className='card'>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.img} alt="img" />
        <p>Species: {pokemon.species}</p>
        <h3>Attact: {pokemon.attact}</h3>
        <h4>Defense: {pokemon.defense}</h4>
        <p>Type: {pokemon.type}</p>
      </div>
    </div>

    </>
  );
}

export default App;
