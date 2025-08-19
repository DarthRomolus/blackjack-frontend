import type { Hand } from "../types/types";
import Card from "./Card";
import "../css/dealerHand.css";
interface dealerHandProps {
  dealerHand: Hand | null;
  dealerIsPlaying: boolean;
}
function DealerHand({ dealerHand, dealerIsPlaying }: dealerHandProps) {
  let src = null;
  let index = 0;
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
      <div className="dealer-icon">
        <img src="/assets/dealer.png" />
        <span className="dealer-sum">
          {dealerIsPlaying ? dealerHand.sum : "?"}
        </span>
      </div>
      <div className="dealer-hand-cards">
        <Card
          isNewCard={true}
          isDealer={true}
          src={src}
          key={`${dealerHand.handCards[0].rank}+${dealerHand.handCards[0].suit}_dealer`}
        />
        {dealerHand.handCards.slice(1).map((card) => {
          index++;
          return (
            <Card
              isNewCard={true}
              isDealer={true}
              src={`/assets/cards/${card.rank}_of_${card.suit}.png`}
              key={`${card.rank}+${card.suit}_dealer`}
            />
          );
        })}
      </div>
    </div>
  );
}
export default DealerHand;
