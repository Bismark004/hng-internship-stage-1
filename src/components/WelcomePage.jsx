import { useState } from "react";
import "./WelcomePage.css";

const WelcomePage = (props) => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container">
      {!submitted ? (
        <div className="input-section">
          <h1>Enter Your Name</h1>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => setSubmitted(true)} disabled={!name.trim()}>
            Submit
          </button>
        </div>
      ) : (
        <div className="welcome-section">
          <h1>Welcome, {name}!</h1>
          <p className="rules-title">Game Rules:</p>
          <ul>
            <li>Guess the correct hidden color by clicking on one of the colored buttons.</li>
            <li>You have <strong>3 attempts</strong> to guess the correct color.</li>
            <li>If you guess correctly, you win! 🎉</li>
            <li>If you guess wrong, you lose an attempt. ❌</li>
            <li>If you run out of attempts, the game will reveal the correct color.</li>
            <li>Click <strong>“Play Again”</strong> to start a new round.</li>
          </ul>
          <button className="start-btn" onClick={props.startGame}>
            Start Game
          </button>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;