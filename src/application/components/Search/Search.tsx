import React from "react";
import { useDragonBallContext } from "../../context/DragonBallProvider";

const Search: React.FC = () => {
  const { searchTerm, setSearchTerm } = useDragonBallContext();

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Buscar un personaje"
    />
  );
};

export default Search;
