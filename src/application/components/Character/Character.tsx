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
      <CharacterName>{character.name}</CharacterName>
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
  background-color: #f9f9f9; /* Fondo claro */
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Sombra suave */
  max-width: 250px;
  margin: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px); /* Efecto de elevación al pasar el ratón */
  }
`;

const CharacterName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
  text-align: center;
  text-transform: uppercase; /* Convierte el texto a mayúsculas */
  letter-spacing: 1px; /* Espaciado entre letras */
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra en la imagen */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Efecto de zoom al pasar el ratón */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 8px;
  background-color: red;
  color: yellow;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3; /* Color más oscuro en hover */
    transform: scale(1.05); /* Ligeramente más grande en hover */
  }
`;

export default Character;
