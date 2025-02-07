import  { useState } from "react"; 
import "./GamePlay.css";


const colors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Leaf Green", hex: "#32CD32" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Violet", hex: "#800080" },
];

const GamePlay = () => {
  const [hiddenColor, setHiddenColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const [revealed, setRevealed] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(3); // Track attempts

  const handleGuess = (color) => {
    if (color.hex === hiddenColor.hex) {
      setRevealed(true);
      setFeedback("Correct! 🎉");
    } else {
      setAttemptsLeft((prev) => prev - 1);
      if (attemptsLeft === 1) {
        setRevealed(true);
        setFeedback(`Game Over! The correct color was ${hiddenColor.name}.`);
      } else {
        setFeedback("Wrong! ❌ Try again!");
      }
    }
  };

  const resetGame = () => {
    setHiddenColor(colors[Math.floor(Math.random() * colors.length)]);
    setRevealed(false);
    setFeedback("");
    setAttemptsLeft(3); // Reset attempts
  };

  return (
    <div className="game-container">
      <h1>Color Guessing Game</h1>
      <div
        className="color-card"
        style={{ backgroundColor: revealed ? hiddenColor.hex : "#13121C" }}
      >
        {revealed ? "" : "???"}
      </div>

      <div className="feedback">{feedback || "Make a guess!"}</div>

      <div className="color-buttons">
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color.hex }}
            onClick={() => handleGuess(color)}
            disabled={revealed || attemptsLeft === 0}
          />
        ))}
      </div>

      <p>Attempts Left: {attemptsLeft}</p>

      {(feedback.includes("Correct!") || feedback.includes("Game Over!")) && (
        <button className="reset-btn" onClick={resetGame}>
          Play Again
        </button>
      )}
    </div>
  );
};



export default GamePlay;