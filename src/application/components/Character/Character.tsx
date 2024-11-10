import React from "react";
import { Character as CharacterType } from "../../../types";

interface CharacterProps {
  character: CharacterType;
  onAddToFavorites: (character: CharacterType) => void;
}

const Character: React.FC<CharacterProps> = ({
  character,
  onAddToFavorites,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems : "center"}}>
      <h3>{character.name}</h3>
      <img
        src={character.image}
        alt={character.name}
        style={{ width: "100px" }}
      />
      <button onClick={() => onAddToFavorites(character)}>
        Añadir a favoritos
      </button>
    </div>
  );
};

export default Character;
