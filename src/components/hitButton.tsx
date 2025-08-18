import type { Hand } from "../types/types";
interface hitProps {
  hit: () => void;
  setDealer: (param1: Hand) => void;
}
function Hit({ hit }: hitProps) {
  return (
    <div className="hit-button-main">
      <button onClick={hit} className="game-buttons">
        <img src="/assets/hit.png" />
      </button>
    </div>
  );
}
export default Hit;
