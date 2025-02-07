import WelcomePage from "./components/WelcomePage";
import GamePlay from "./components/GamePlay";
import { useState } from "react";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    
    setGameStarted(true);
  }
   return (
  <div>
    {!gameStarted ? (
      <WelcomePage startGame={startGame} />
    ): (
      <GamePlay/>
 
    )}
  </div>
  )
}
export default App;