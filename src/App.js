import React, {useState} from 'react';
import './App.css';
import pokemonData from "./data/pokemon.json";
import SearchInput from './components/SearchInput';
import PokemonContainer from './components/pokemonContainer';
import Header from './components/header';

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(pokemonData);

  const onSearchResults = () => {
    if (query === "") {
      setResults(pokemonData);
      return
    }
    let lowerCaseQuery = query.toLowerCase();
    let newResults = pokemonData.filter((pokemonInfo) => {
      let keys = Object.keys(pokemonInfo);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let infoVal = pokemonInfo[key];
        if (typeof infoVal !== "object" && 
        infoVal.toLowerCase().indexOf(lowerCaseQuery) !== -1) {
          return true;
        }
        else if (Array.isArray(infoVal)) {
          let abilityMatchService = infoVal.filter((ability) => 
            ability.toLowerCase().indexOf(lowerCaseQuery) !== -1);
          if (abilityMatchService.legnth > 0) {
            return true;
          }
        }
      }
      return false;
    });
    setResults(newResults)
  }

  return (<div className="app">
    <Header />
    <main>
      <p>Search, identify, and learn more about pokemon through this Pokedex!</p>
      <SearchInput query={query} setQuery={setQuery} onSearchResults={onSearchResults} />
      <PokemonContainer results={results} />
    </main>
  </div>);
}

export default App;