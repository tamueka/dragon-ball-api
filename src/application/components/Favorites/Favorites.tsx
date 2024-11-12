import React from "react";
import { useNavigate } from "react-router-dom";
import { useDragonBallContext } from "../../context/DragonBallProvider";
import styled from "@emotion/styled";

const Favorites: React.FC = () => {
  const { favorites, removeFromFavorites } = useDragonBallContext();
  const navigate = useNavigate();

  return (
    <FavoritesContainer>
      <Title>Personajes Favoritos</Title>
      {favorites.length > 0 ? (
        favorites.map((character) => (
          <CharacterCard key={character.id}>
            <CharacterName>{character.name}</CharacterName>
            <CharacterImage src={character.image} alt={character.name} />
            <RemoveButton onClick={() => removeFromFavorites(character.id)}>
              Eliminar de favoritos
            </RemoveButton>
          </CharacterCard>
        ))
      ) : (
        <NoFavoritesMessage>
          No tienes personajes favoritos aún.
        </NoFavoritesMessage>
      )}
      <BackButton onClick={() => navigate("/")}>Volver</BackButton>
    </FavoritesContainer>
  );
};

const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 200px;
`;

const CharacterName = styled.h3`
  font-size: 18px;
  color: #444;
  margin-bottom: 10px;
  text-align: center;
`;

const CharacterImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
`;

const RemoveButton = styled.button`
  padding: 8px 16px;
  background-color: red;
  color: yellow;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c9302c;
  }
`;

const NoFavoritesMessage = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 20px;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: yellow;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Favorites;
