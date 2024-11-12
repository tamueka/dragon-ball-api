import styled from "@emotion/styled";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterDetail from "./application/components/CharacterDetail/CharacterDetail";
import CharacterList from "./application/components/CharacterList/Characterlist";
import Favorites from "./application/components/Favorites/Favorites";
import { Footer } from "./application/components/Footer/Footer";
import { Header } from "./application/components/Header/Header";
import { DragonBallProvider } from "./application/context/DragonBallProvider";

export const App: React.FC = () => {
  return (
    <DragonBallProvider>
      <Router>
        <Header />
        <AppContainer>
          <Title>Dragon Ball</Title>
          <Routes>
            <Route path="/" element={<CharacterList />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </AppContainer>
        <Footer />
      </Router>
    </DragonBallProvider>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
`;

const Title = styled.h1`
  text-align: center;
  color: red;
`;
