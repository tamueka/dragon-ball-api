import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { useDragonBallContext } from "../../context/DragonBallProvider";
import Character from "../Character/Character";
import Search from '../Search/Search';


const CharacterList: React.FC = () => {
  const { characters, addToFavorites, searchTerm } = useDragonBallContext();

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CharacterListContainer>
      <SearchContainer>
        <Search></Search>
      </SearchContainer>
      {filteredCharacters.map((character) => (
        <Link to={`/character/${character.id}`} key={character.id}>
          <Character
            key={character.id}
            character={character}
            onAddToFavorites={addToFavorites}
          />
        </Link>
      ))}
    </CharacterListContainer>
  );
};

const CharacterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que los personajes se ajusten en varias filas */
  gap: 16px; /* Espacio entre los elementos */
  justify-content: center; /* Centra los personajes en el contenedor */
  padding: 20px;
  background-color: #f5f5f5; /* Fondo claro */
  border-radius: 8px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #e0e0e0; /* Fondo gris claro */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera */
`;

const SearchBar = styled.input`
  width: 80%;
  max-width: 300px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3b82f6; /* Cambia el borde al enfocar */
  }
`;

export default CharacterList;
