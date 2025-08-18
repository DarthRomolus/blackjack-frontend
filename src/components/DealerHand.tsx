import type { Hand } from "../types/types";
import Card from "./Card";
import "../css/dealerHand.css";
interface dealerHandProps {
  dealerHand: Hand | null;
  dealerIsPlaying: Boolean;
}
function DealerHand({ dealerHand, dealerIsPlaying }: dealerHandProps) {
  let src = null;
  if (dealerHand === null) {
    return <></>;
  }
  if (dealerIsPlaying === true) {
    src = `/assets/cards/${dealerHand.handCards[0].rank}_of_${dealerHand.handCards[0].suit}.png`;
  } else {
    src = `/assets/cards-back -resize.jpg`;
  }
  return (
    <div className="dealer-hand-container">
      <div className="dealer-sum">{dealerHand.sum}</div>
      <Card
        src={src}
        key={`${dealerHand.handCards[0].rank}+${dealerHand.handCards[0].suit}_dealer`}
      />
      {dealerHand.handCards.slice(1).map((card) => (
        <Card
          src={`/assets/cards/${card.rank}_of_${card.suit}.png`}
          key={`${card.rank}+${card.suit}_dealer`}
        />
      ))}
    </div>
  );
}
export default DealerHand;
