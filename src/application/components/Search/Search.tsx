import styled from "@emotion/styled";
import React from "react";
import { useDragonBallContext } from "../../context/DragonBallProvider";

export const Search: React.FC = () => {
  const { searchTerm, setSearchTerm } = useDragonBallContext();
  return (
    <SearchBar
      type="text"
      value={searchTerm}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchTerm(e.target.value)
      }
      placeholder="Buscar un personaje"
    />
  );
};

const SearchBar = styled.input`
  width: 30%;
  padding: 5px;
  height: 20px;
  border-radius: 5px;
  outline: none;
  color: #9dbfaf;
`;

export default Search;
