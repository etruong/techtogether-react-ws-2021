import React, { useState } from "react";

function PokemonCard(props) {
    const [display, setDisplay] = useState(false);

    const style = {
        backgroundImage: `url("./img/${props.img}")`
    }

    const onClickHandler = () => {
        setDisplay(!display);
    }

    return (
        <div className={"pokemon-card " + props.type.toLowerCase()} onClick={onClickHandler}>
            <div className="pokemon-img" style={style}>&nbsp;</div>
            {display ?
                <div>
                    <ul>
                        <li><span className="bold">Name: </span>{props.name}</li>
                        <li><span className="bold">Type: </span>{props.type}</li>
                        <li><span className="bold">HP: </span>{props.hp}</li>
                        <li><span className="bold">Attack: </span>{props.attack}</li>
                        <li><span className="bold">Defense: </span>{props.defense}</li>
                        <li className="bold">Abilities:</li>
                        <ul>
                            {
                                props.abilities.map((ability) => <li>{ability}</li>)
                            }
                        </ul>
                    </ul>
                </div> : null
            }
        </div>
    )
}

export default PokemonCard;