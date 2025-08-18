import type { Hand } from "../types/types";
import Card from "./Card";
import "../css/playerHand.css";
interface playerHandProps {
  playerHand: Hand | null;
}
function PlayerHand({ playerHand }: playerHandProps) {
  if (playerHand === null) {
    return <></>;
  }
  return (
    <div className="player-hand-container">
      <div className="player-sum">{playerHand.sum}</div>
      {playerHand.handCards.map((card) => (
        <Card
          src={`/assets/cards/${card.rank}_of_${card.suit}.png`}
          key={`${card.rank}+${card.suit}_player`}
        />
      ))}
    </div>
  );
}
export default PlayerHand;
