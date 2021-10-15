import React from 'react';
import PokemonCard from './pokemonCard';

function PokemonContainer(props) {
    return (<div className="pokemon-container">
        {
            props.results.map((pokemon) => {
                return <PokemonCard {...pokemon} />
            })
        }
    </div>)
}

export default PokemonContainer;