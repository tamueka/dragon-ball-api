import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Character } from "../../types";
import LocalStorageService from "../../services/localStorageService";

interface DragonBallContextProps {
  characters: Character[];
  favorites: Character[];
  addToFavorites: (character: Character) => void;
  removeFromFavorites: (characterId: number) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const DragonBallContext = createContext<DragonBallContextProps | undefined>(
  undefined
);

interface DragonBallProviderProps {
  children: ReactNode;
}

export const DragonBallProvider: React.FC<DragonBallProviderProps> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<Character[]>(() =>
    LocalStorageService.load("characters", [])
  );

  const [favorites, setFavorites] = useState<Character[]>(() =>
    LocalStorageService.load("favorites", [])
  );

  const [searchTerm, setSearchTerm] = useState<string>("");
  const url = "https://dragonball-api.com/api/characters";

  useEffect(() => {
    if (characters.length === 0) {
      const fetchDataCharacter = async () => {
        try {
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`HTTP error! Estado: ${response.status}`);
          }

          const jsonData = await response.json();
          setCharacters(jsonData.items);
          LocalStorageService.save("characters", jsonData.items);
        } catch (error) {
          console.error("No se pudieron recuperar los datos:", error);
        }
      };

      fetchDataCharacter();
    }
  }, [characters]);

  const addToFavorites = (character: Character) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === character.id)) {
        const updatedFavorites = [...prevFavorites, character];
        LocalStorageService.save("favorites", updatedFavorites);
        return updatedFavorites;
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (characterId: number) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (character) => character.id !== characterId
      );
      LocalStorageService.save("favorites", updatedFavorites);
      return updatedFavorites;
    });
  };

  return (
    <DragonBallContext.Provider
      value={{
        characters,
        favorites,
        addToFavorites,
        removeFromFavorites,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </DragonBallContext.Provider>
  );
};

export const useDragonBallContext = () => {
  const context = useContext(DragonBallContext);
  if (!context) {
    throw new Error(
      "useDragonBallContext debe usarse dentro de un DragonBallProvider"
    );
  }
  return context;
};
