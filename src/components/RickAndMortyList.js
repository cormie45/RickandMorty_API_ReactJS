import React from "react"
import Character from "./Character"
import "./RickAndMortyList.css"

const RickAndMortyList = ({characters, onCharacterClick}) => {

    const CharacterItems = characters.map((character, index) => {
        return <Character character={character} key={index} onCharacterClick={onCharacterClick} />
    });

    return (
        <div className="list-panel">
            <ul>
                {CharacterItems}
            </ul>
        </div>
    )
}

export default RickAndMortyList;