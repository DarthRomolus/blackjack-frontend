import { useEffect, useState } from "react";
import { GameStatus, type Hand, type GameState } from "../types/types";
import GameButtons from "./gameButtons";
import "../css/Board.css";
import Start from "./startButton";
import Restart from "./restart";
import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";
import EndScreen from "./endScreen";

function Board() {
  const [dealerHand, setDealer] = useState<Hand | null>(null);
  const [playerHand, setPlayer] = useState<Hand | null>(null);
  const [status, setStatus] = useState<GameStatus>(GameStatus.Playing);
  const [dealerIsPlaying, setDealerIsPlaying] = useState<Boolean>(false);
  const [isActiveGame, setActiveGame] = useState<Boolean>(false);
  const [doubleAllowed, setDoubleAllowed] = useState<Boolean>(true);

  useEffect(() => {
    if (status === GameStatus.Blackjack || status === GameStatus.Busted) {
      standGame();
      console.log("called stand");
    }
  }, [status]);

  const startGame = async () => {
    const res = await fetch("http://localhost:3000/game/start", {
      method: "POST",
    });
    const gameState: GameState = await res.json();
    setDealer(gameState.dealerHand);
    setPlayer(gameState.playerHand);
    setStatus(gameState.status);
    setActiveGame(true);
    setDealerIsPlaying(false);
    setDoubleAllowed(true);
    console.log(gameState);
    if (gameState.status === GameStatus.Blackjack) {
      standGame();
    }
  };

  const hitGame = async () => {
    const res = await fetch("http://localhost:3000/game/hit", {
      method: "POST",
    });
    const gameState: GameState = await res.json();
    setPlayer(gameState.playerHand);
    setStatus(gameState.status);
    setDoubleAllowed(false);
    console.log(gameState);
  };

  const standGame = async () => {
    const res = await fetch("http://localhost:3000/game/stand", {
      method: "POST",
    });
    const gameState: GameState = await res.json();
    setDealer(gameState.dealerHand);
    setStatus(gameState.status);
    setDealerIsPlaying(true);
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
    setDealerIsPlaying(true);
    console.log(gameState);
  };

  const restartGame = () => {
    setActiveGame(false);
    setDealer(null);
    setPlayer(null);
    console.log("restart");
  };
  return (
    <div className="main-container">
      <div className="table-container">
        <img src="/assets/table2.png" className="table" />
      </div>
      <GameButtons
        hit={hitGame}
        stand={standGame}
        double={doubleGame}
        dealerIsPlaying={dealerIsPlaying}
        isDoubleAllowed={doubleAllowed}
      />
      <Start start={startGame} isActive={isActiveGame} />
      <Restart restart={restartGame} />
      <DealerHand dealerIsPlaying={dealerIsPlaying} dealerHand={dealerHand} />
      <PlayerHand playerHand={playerHand} />
      <EndScreen
        status={status}
        isActiveGame={isActiveGame}
        restart={restartGame}
      />
    </div>
  );
}

export default Board;
