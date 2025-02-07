import WelcomePage from "./components/WelcomePage";
import GamePlay from "./components/GamePlay";
import { useState } from "react";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState("");

  const startGame = (name) => {
    setPlayerName(name);
    setGameStarted(true);
  }
   return (
  <div>
    {!gameStarted ? (
      <WelcomePage startGame={startGame} />
    ): (
      <GamePlay playerName={playerName} />
 
    )}
  </div>
  )
}
export default App;