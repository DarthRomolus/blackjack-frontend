import { GameStatus } from "../types/types";
import "../css/endScreen.css";
import RestartEndGame from "./restartEndGame";

interface endScreenProps {
  status: GameStatus;
  dealerIsPlaying: boolean;
  isEnded: boolean;
  restart: () => void;
}
function EndScreen({
  status,
  dealerIsPlaying,
  isEnded,
  restart,
}: endScreenProps) {
  if (dealerIsPlaying === false || isEnded === false) {
    return <></>;
  } else {
    if (status === GameStatus.PlayerWins) {
      return (
        <div className="message-container win">
          <span className="message">you won!</span>
          <div>
            <img src="/assets/win.png" />
          </div>
          <RestartEndGame restart={restart} />
        </div>
      );
    }
    if (status === GameStatus.Busted) {
      return (
        <div className="message-container bust">
          <span className="message">oof busted</span>
          <div>
            <img src="/assets/clown.png" />
          </div>
          <RestartEndGame restart={restart} />
        </div>
      );
    }
    if (status === GameStatus.Blackjack) {
      return (
        <div className="message-container blackjack">
          <span className="message">BlackJack!!!</span>
          <div>
            <img src="/assets/game.png" />
          </div>
          <RestartEndGame restart={restart} />
        </div>
      );
    }
    if (status === GameStatus.DealerWins) {
      return (
        <div className="message-container lose">
          <span className="message">you lose</span>
          <div>
            <img src="/assets/clown.png" />
          </div>
          <RestartEndGame restart={restart} />
        </div>
      );
    }
    if (status === GameStatus.Push) {
      return (
        <div className="message-container push">
          <span className="message">push</span>
          <div>
            <img src="/assets/face-expression.png" />
          </div>
          <RestartEndGame restart={restart} />
        </div>
      );
    } else {
      return <></>;
    }
  }
}
export default EndScreen;
