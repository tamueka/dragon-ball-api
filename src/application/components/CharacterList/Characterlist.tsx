import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { useDragonBallContext } from "../../context/DragonBallProvider";
import Character from "../Character/Character";
import Search from "../Search/Search";

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
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CharacterList;
