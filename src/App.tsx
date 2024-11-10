import * as React from "react";
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
        <CharacterList />
        {/*         <Favorites /> */}
      </div>
      <Footer />
    </DragonBallProvider>
  );
};
