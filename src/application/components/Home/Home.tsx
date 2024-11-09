import { useEffect, useState } from "react";
import "./Home.css";

type Character = {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: Date | null;
};

export const Home: React.FC = () => {
  const urlBase = "https://dragonball-api.com/api/characters";
  const [data, setData] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlBase);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData.items);
        console.log(jsonData.items);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError("Error fetching data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Personajes Dragon Ball</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="character-list">
          {data.slice(0, 4).map((character, index) => (
            <li key={index}>
              <div className="card">
                <img src={character.image} alt="Avatar" />
                <div className="container">
                  <h4>
                    <b>{character.name}</b>
                  </h4>
                  <p>{character.race}</p>
                  <p>{character.affiliation}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
