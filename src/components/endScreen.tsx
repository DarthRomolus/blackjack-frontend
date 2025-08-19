import { GameStatus } from "../types/types";
import "../css/endScreen.css";

interface endScreenProps {
  status: GameStatus;
  isActiveGame: Boolean;
  restart: () => void;
}
function EndScreen({ status, isActiveGame }: endScreenProps) {
  if (isActiveGame === false) {
    return <></>;
  } else {
    if (status === GameStatus.PlayerWins) {
      return (
        <div className="win-container">
          <span>you won!</span>
          <div>
            <img src="/assets/win.png" />
          </div>
        </div>
      );
    }
    if (status === GameStatus.Busted) {
      return <div className="div-container">oof busted</div>;
    }
    if (status === GameStatus.Blackjack) {
      return <div>nice,BlackJack</div>;
    }
    if (status === GameStatus.DealerWins) {
      return <div>you lose this</div>;
    }
    if (status === GameStatus.Push) {
      return <div>push!</div>;
    } else {
      return <></>;
    }
  }
}
export default EndScreen;
