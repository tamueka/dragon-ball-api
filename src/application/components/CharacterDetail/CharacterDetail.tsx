import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDragonBallContext } from "../../context/DragonBallProvider";

const CharacterDetail: React.FC = () => {
  const { characters } = useDragonBallContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const character = characters.find(
    (character) => character.id === parseInt(id)
  );

  if (!character) {
    return <p>Personaje no encontrado</p>; 
  }

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} style={{height: "80%", width: "80%"}}/>
      <p>{character.description}</p>
      <p>{character.ki}</p>
      <p>{character.maxKi}</p>

      <button onClick={() => navigate('/')}>Volver</button>

    </div>
  );
};

export default CharacterDetail;
