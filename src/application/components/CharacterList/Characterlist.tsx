import React from "react";
import Character from "../Character/Character";
import { useDragonBallContext } from "../../context/DragonBallProvider";

const CharacterList: React.FC = () => {
  const { characters, addToFavorites, searchTerm } = useDragonBallContext();

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredCharacters.slice(0, 4).map((character) => (
        <Character
          key={character.id}
          character={character}
          onAddToFavorites={addToFavorites}
        />
      ))}
    </div>
  );
};

export default CharacterList;
