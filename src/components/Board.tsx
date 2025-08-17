import { useState } from "react";
import { type Hand, type GameState, type GameStatus } from "../types/types";
import GameButtons from "./gameButtons";
import "../css/Board.css";

function Board() {
  const [dealerHand, setDealer] = useState<Hand | null>(null);
  const [playerHand, setPlayer] = useState<Hand | null>(null);
  const [status, setStatus] = useState<GameStatus | null>(null);
  const startGame = async () => {
    const res = await fetch("http://localhost:3000/game/start", {
      method: "POST",
    });
    const gameState: GameState = await res.json();
    setDealer(gameState.dealerHand);
    setPlayer(gameState.playerHand);
    setStatus(gameState.status);
    console.log(gameState);
  };
  const hitGame = async () => {
    const res = await fetch("http://localhost:3000/game/hit", {
      method: "POST",
    });
    const gameState: GameState = await res.json();
    setDealer(gameState.dealerHand);
    setPlayer(gameState.playerHand);
    setStatus(gameState.status);
    console.log(gameState);
  };
  const standGame = async () => {
    const res = await fetch("http://localhost:3000/game/stand", {
      method: "POST",
    });
    const gameState: GameState = await res.json();
    setDealer(gameState.dealerHand);
    setPlayer(gameState.playerHand);
    setStatus(gameState.status);
    console.log(gameState);
  };
  const doubleGame = async () => {
    const res = await fetch("http://localhost:3000/game/double", {
      method: "POST",
    });
    const gameState: GameState = await res.json();
    setDealer(gameState.dealerHand);
    setPlayer(gameState.playerHand);
    setStatus(gameState.status);
    console.log(gameState);
  };
  return (
    <div className="main-container">
      <GameButtons
        start={startGame}
        hit={hitGame}
        stand={standGame}
        double={doubleGame}
      />
    </div>
  );
}

export default Board;
