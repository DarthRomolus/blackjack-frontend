import { useState } from "react";
import type { Hand, Card as CardType } from "../types/types";
import Card from "./Card";
interface dealerHandProps {
  dealerHand: Hand;
}
function dealerHand({ dealerHand }: dealerHandProps) {
  const [dealerSum, setDealerSum] = useState<number>(dealerHand.sum);
  const [dealerHandCard, setDealerHandCard] = useState<CardType[]>(
    dealerHand.handCards
  );
  return (
    <div className="dealer-hand-container">
      <Card />
    </div>
  );
}
