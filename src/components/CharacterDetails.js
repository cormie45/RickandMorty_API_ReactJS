import React from "react"
import "./CharacterDetails.css"

const CharacterDetails = ({selectedCharacter}) => {
    return (

        <div className="info-panel">
            <img src={selectedCharacter.image} alt={selectedCharacter.name} />
            <h2>Name: {selectedCharacter.name}</h2>
            <h3>Species: {selectedCharacter.species}</h3>
            <p>Current Status: {selectedCharacter.status}</p>
            <p>Origin: {selectedCharacter.origin.name}</p>
            <p>Current Location: {selectedCharacter.location.name}</p>
        </div>

    )
}

export default CharacterDetails;