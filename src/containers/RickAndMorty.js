import React, {useState, useEffect} from "react";
import './RickAndMorty.css';
import RickAndMortyList from "../components/RickAndMortyList";
import CharacterDetails from "../components/CharacterDetails"

const RickAndMorty = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = function () {
        fetch ("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(characters => setCharacters(characters.results))
    };

    const onCharacterClick = function (character) {
        setSelectedCharacter(character);
    };

    return (
        <div className="main-container">
            <div className="rickandmorty-list">
                <h1>Characters:</h1>
                <RickAndMortyList characters={characters} onCharacterClick={onCharacterClick} />
            </div>
            <div className="character-details">
                <h1>Bio:</h1>
                {selectedCharacter ? <CharacterDetails selectedCharacter={selectedCharacter} /> : null}
            </div>
        </div>
    )
};

export default RickAndMorty;