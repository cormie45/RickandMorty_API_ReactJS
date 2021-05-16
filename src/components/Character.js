import React from "react";
import "./Character.css"

const Character = ({character, onCharacterClick}) => {

    const handleClick = function () {
        onCharacterClick(character);
    };

    return (
        <li onClick={handleClick}>
            <h2>{character.name}</h2>
        </li>
    )
}

export default Character;