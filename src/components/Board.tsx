import { useEffect, useState } from "react";
import {
  GameStatus,
  type Hand,
  type GameState,
  type Card,
} from "../types/types";
import GameButtons from "./gameButtons";
import "../css/Board.css";
import Start from "./startButton";
import Restart from "./restartInGame";
import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";
import EndScreen from "./endScreen";
import Deck from "./deck";

const STORAGE_KEY = "storage key";
interface savedState {
  dealerHand: Hand | null;
  playerHand: Hand | null;
  status: GameStatus;
  dealerIsPlaying: boolean;
  isActiveGame: boolean;
  doubleAllowed: boolean;
  isEnded: boolean;
  deck: Card[] | null;
}
function Board() {
  const [dealerHand, setDealer] = useState<Hand | null>(null);
  const [playerHand, setPlayer] = useState<Hand | null>(null);
  const [status, setStatus] = useState<GameStatus>(GameStatus.Playing);
  const [dealerIsPlaying, setDealerIsPlaying] = useState<boolean>(false);
  const [isActiveGame, setActiveGame] = useState<boolean>(false);
  const [doubleAllowed, setDoubleAllowed] = useState<boolean>(true);
  const [isEnded, setIsEnded] = useState<boolean>(false);
  const [deck, setDeck] = useState<Card[] | null>(null);
  const [finishedLoading, setFinishedLoading] = useState<boolean>(false);
  const snapshotFunction = (): savedState => ({
    dealerHand,
    playerHand,
    status,
    dealerIsPlaying,
    isActiveGame,
    doubleAllowed,
    isEnded,
    deck,
  });
  useEffect(() => {
    if (status === GameStatus.Blackjack || status === GameStatus.Busted) {
      standGame();
      console.log("called stand");
    }

    if (status === GameStatus.Playing) {
      setIsEnded(false);
      return;
    }
    const timer = setTimeout(() => {
      setIsEnded(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [status]);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      setFinishedLoading(true);
      return;
    }

    const savedState: savedState = JSON.parse(raw);
    setDealer(savedState.dealerHand);
    setPlayer(savedState.playerHand);
    setStatus(savedState.status);
    setDealerIsPlaying(savedState.dealerIsPlaying);
    setActiveGame(savedState.isActiveGame);
    setDoubleAllowed(savedState.doubleAllowed);
    setIsEnded(savedState.isEnded);
    setDeck(savedState.deck);
    setFinishedLoading(true);
  }, []);

  useEffect(() => {
    const snapshot = snapshotFunction();
    if (finishedLoading) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    }
  }, [
    dealerHand,
    playerHand,
    status,
    dealerIsPlaying,
    isActiveGame,
    doubleAllowed,
    isEnded,
    deck,
  ]);

  useEffect(() => {
    const listener = () => {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(snapshotFunction())
      );
    };
    window.addEventListener("pagehide", listener);
    return () => {
      window.removeEventListener("pagehide", listener);
    };
  }, [
    dealerHand,
    playerHand,
    status,
    dealerIsPlaying,
    isActiveGame,
    doubleAllowed,
    isEnded,
    deck,
  ]);

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
    setDeck(gameState.deck);
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
    setDeck(gameState.deck);
  };

  const standGame = async () => {
    const res = await fetch("http://localhost:3000/game/stand", {
      method: "POST",
    });
    const gameState: GameState = await res.json();
    setDealer(gameState.dealerHand);
    setStatus(gameState.status);
    setDealerIsPlaying(true);
    setDeck(gameState.deck);
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
    setDeck(gameState.deck);
  };

  const restartGame = () => {
    setActiveGame(false);
    setDealer(null);
    setPlayer(null);
    setIsEnded(false);
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
        dealerIsPlaying={dealerIsPlaying}
        isEnded={isEnded}
        restart={restartGame}
      />
      <Deck deck={deck} />
    </div>
  );
}

export default Board;
