import * as React from "react";
import { Route } from "react-router-dom";
import Character from "./application/components/Character/Character";
import CharacterList from "./application/components/CharacterList/Characterlist";
import { Footer } from "./application/components/Footer/Footer";
import { Header } from "./application/components/Header/Header";
import { DragonBallProvider } from "./application/context/DragonBallProvider";

export const App: React.FC = () => {
  return (
    <DragonBallProvider>
      <Header />
      <div>
        <h1 style={{ textAlign: "center" }}>Personajes Dragon Ball</h1>
        {/* <Search /> */}
        {/* Ruta para la lista de personajes */}
        <Route path="/" element={<CharacterList />} />
        {/* Ruta para los detalles de un personaje específico */}
        <Route path="/character/:id" element={<Character />} />
        {/*         <Favorites /> */}
      </div>
      <Footer />
    </DragonBallProvider>
  );
};
