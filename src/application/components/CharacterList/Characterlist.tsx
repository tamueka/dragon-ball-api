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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <Search></Search>
      </div>
      {filteredCharacters.slice(0, 4).map((character) => (
        <Link to={`/character/${character.id}`} key={character.id}>
          <Character
            key={character.id}
            character={character}
            onAddToFavorites={addToFavorites}
          />
        </Link>
      ))}
    </div>
  );
};

export default CharacterList;
