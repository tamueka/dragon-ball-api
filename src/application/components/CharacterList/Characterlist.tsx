import React from "react";
import Character from "../Character/Character";
import { useDragonBallContext } from "../../context/DragonBallProvider";
import { Link } from "react-router-dom";

const CharacterList: React.FC = () => {
  const { characters, addToFavorites, searchTerm } = useDragonBallContext();

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
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
