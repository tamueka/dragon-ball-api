import styled from '@emotion/styled';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDragonBallContext } from '../../context/DragonBallProvider';


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
      <img
        src={character.image}
        alt={character.name}
      />
      <p>{character.description}</p>
      <p>{character.ki}</p>
      <p>{character.maxKi}</p>
      <button onClick={() => navigate("/")}>Volver</button>
    </CharacterDetailContainer>
  );
};

const CharacterDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CharacterDetail;
