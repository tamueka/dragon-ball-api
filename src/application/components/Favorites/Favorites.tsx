import React from "react";
import { useDragonBallContext } from "../../context/DragonBallProvider";

const Favorites: React.FC = () => {
  const { favorites } = useDragonBallContext();

  return (
    <div>
      <h2>Personajes Favoritos</h2>
      {favorites.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <img
            src={character.image}
            alt={character.name}
            style={{ width: "100px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Favorites;
