import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Character } from "../../types";

interface DragonBallContextProps {
  characters: Character[];
  favorites: Character[];
  addToFavorites: (character: Character) => void;
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
  const [characters, setCharacters] = useState<Character[]>([]);
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const url = "https://dragonball-api.com/api/characters";

  useEffect(() => {
    const fetchDataCharacter = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setCharacters(jsonData.items);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchDataCharacter();
  }, []);

  const addToFavorites = (character: Character) => {
    setFavorites((prevFavorites) => [...prevFavorites, character]);
  };

  return (
    <DragonBallContext.Provider
      value={{
        characters,
        favorites,
        addToFavorites,
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
      "useDragonBallContext must be used within a DragonBallProvider"
    );
  }
  return context;
};
