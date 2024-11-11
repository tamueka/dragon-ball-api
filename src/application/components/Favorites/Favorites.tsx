import React from "react";
import { useNavigate } from "react-router-dom";
import { useDragonBallContext } from "../../context/DragonBallProvider";

const Favorites: React.FC = () => {
  const { favorites, removeFromFavorites } = useDragonBallContext();
  const navigate = useNavigate();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Personajes Favoritos</h2>
      {favorites.length > 0 ? (
        favorites.map((character) => (
          <div key={character.id}>
            <h3>{character.name}</h3>
            <img
              src={character.image}
              alt={character.name}
              style={{ width: "100px" }}
            />
            <button onClick={() => removeFromFavorites(character.id)}>
            Eliminar de favoritos
          </button>
          </div>
        ))
      ) : (
        <p>No tienes personajes favoritos aún.</p>
      )}
      <button onClick={() => navigate("/")}>Volver</button>
    </div>
  );
};

export default Favorites;
