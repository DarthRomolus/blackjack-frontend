import type { Card } from "../types/types";
interface deckProps {
  deck: Card[] | null;
}
function Deck({ deck }: deckProps) {
  return (
    <div className="deck-container">
      <span className="deck-left">cards in deck:{deck?.length}</span>
    </div>
  );
}
export default Deck;
