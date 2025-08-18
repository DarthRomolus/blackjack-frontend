import { useState } from "react";
import { type Hand, type GameState, type GameStatus } from "../types/types";
import GameButtons from "./gameButtons";
import "../css/Board.css";
import Start from "./startButton";
import Restart from "./restart";

function Board() {
  const [dealerHand, setDealer] = useState<Hand | null>(null);
  const [playerHand, setPlayer] = useState<Hand | null>(null);
  const [status, setStatus] = useState<GameStatus | null>(null);
  const [isActive, setActive] = useState<Boolean>(false);

  const startGame = async () => {
    const res = await fetch("http://localhost:3000/game/start", {
      method: "POST",
    });
    const gameState: GameState = await res.json();
    setDealer(gameState.dealerHand);
    setPlayer(gameState.playerHand);
    setStatus(gameState.status);
    setActive(true);
    console.log(gameState);
  };
  const hitGame = async () => {
    const res = await fetch("http://localhost:3000/game/hit", {
      method: "POST",
    });
    const gameState: GameState = await res.json();
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
  const restartGame = () => {
    setActive(false);
    console.log("restart");
  };
  return (
    <div className="main-container">
      <GameButtons hit={hitGame} stand={standGame} double={doubleGame} />
      <Start start={startGame} isActive={isActive} />
      <Restart restart={restartGame} />
    </div>
  );
}

export default Board;
