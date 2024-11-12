import styled from "@emotion/styled";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDragonBallContext } from "../../context/DragonBallProvider";

const CharacterDetail: React.FC = () => {
  const { characters } = useDragonBallContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const character = characters.find(
    (character) => character.id === parseInt(id)
  );

  if (!character) {
    return <p>Personaje no encontrado</p>;
  }

  return (
    <CharacterDetailContainer>
      <h2>{character.name}</h2>
      <CharacterDetailImg src={character.image} alt={character.name} />
      <Description>{character.description}</Description>
      <Stat>{character.ki}</Stat>
      <Stat>{character.maxKi}</Stat>
      <Button onClick={() => navigate("/")}>Volver</Button>
    </CharacterDetailContainer>
  );
};

const CharacterDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5; /* Fondo claro */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */
  max-width: 400px;
  margin: 0 auto;
`;

const CharacterDetailImg = styled.img`
  height: 276px;
  width: 130px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  text-align: center;
  line-height: 1.4;
  margin: 12px 0;

  display: -webkit-box;
  -webkit-line-clamp: 4; /* Número de líneas visibles */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; /* Agrega puntos suspensivos al final */
`;

const Stat = styled.p`
  font-size: 18px;
  color: #666;
  margin: 6px 0;
`;

const Button = styled.button`
  background-color: red;
  color: yellow;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 12px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`;

export default CharacterDetail;
