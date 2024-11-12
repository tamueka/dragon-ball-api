import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Character as CharacterType } from "../../../types";

interface CharacterProps {
  character: CharacterType;
  onAddToFavorites: (character: CharacterType) => void;
}

const Character: React.FC<CharacterProps> = ({
  character,
  onAddToFavorites,
}) => {
  const navigate = useNavigate();

  const handleAddToFavorites = (event: React.FormEvent) => {
    event.preventDefault();
    onAddToFavorites(character);
  };

  const handleViewToFavorites = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/favorites");
  };

  return (
    <CharacterContainer>
      <h3>{character.name}</h3>
      <ImageContainer>
        <CharacterImage src={character.image} alt={character.name} />
      </ImageContainer>
      <ButtonContainer>
        <Button onClick={handleAddToFavorites}>Añadir a favoritos</Button>
        <Button onClick={handleViewToFavorites}>Ver favoritos</Button>
      </ButtonContainer>
    </CharacterContainer>
  );
};

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 350px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

export default Character;
