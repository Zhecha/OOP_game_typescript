import React from "react";
import Header from "./Header";
import GameGrid from "./GameGrid";
import QueueWalking from "./QueueWalking";
import Main from "./Main";
import "../styles/App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <QueueWalking />
        <GameGrid />
      </Main>
    </div>
  );
};

export default App;
