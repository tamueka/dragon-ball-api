import React from "react";
import { Character as CharacterType } from "../../../types";
import { useNavigate } from "react-router-dom";

interface CharacterProps {
  character: CharacterType;
  onAddToFavorites: (character: CharacterType) => void;
}

const Character: React.FC<CharacterProps> = ({
  character,
  onAddToFavorites,
}) => {
  const navigate = useNavigate();

  const handleAddToFavorites = (event: React.FormEventy) => {
    event.preventDefault();
    onAddToFavorites(character);
  };

  const handleViewToFavorites = (event: React.FormEventy) => {
    event.preventDefault();
    navigate("/favorites");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>{character.name}</h3>
      <img
        src={character.image}
        alt={character.name}
        style={{ width: "100px" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            margin: "1rem",
          }}
          onClick={handleAddToFavorites}
        >
          Añadir a favoritos
        </button>
        <button onClick={handleViewToFavorites}>Ver favoritos</button>
      </div>
    </div>
  );
};

export default Character;
