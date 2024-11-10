import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CharacterList from "./application/components/CharacterList/Characterlist";
import { Footer } from "./application/components/Footer/Footer";
import { Header } from "./application/components/Header/Header";
import { DragonBallProvider } from "./application/context/DragonBallProvider";

export const App: React.FC = () => {
  return (
    <DragonBallProvider>
      <Router>
        <Header />
        <div>
          <h1 style={{ textAlign: "center" }}>Personajes de Dragon Ball</h1>
          <Routes>
            {/* Ruta principal para la lista de personajes */}
            <Route path="/" element={<CharacterList />} />
            {/* Ruta dinámica para los detalles de un personaje específico */}
            {/*  <Route path="/character/:id" element={<CharacterDetail />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </DragonBallProvider>
  );
};
