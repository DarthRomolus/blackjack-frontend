import Hit from "./hitButton";
import Stand from "./standButton";
import Double from "./doubleButton";

import "../css/gameButtons.css";
interface gameButtonProps {
  hit: () => void;
  stand: () => void;
  double: () => void;
  dealerIsPlaying: Boolean;
  isDoubleAllowed: Boolean;
}
function GameButtons({
  hit,
  stand,
  double,
  dealerIsPlaying,
  isDoubleAllowed,
}: gameButtonProps) {
  return (
    <div className={dealerIsPlaying ? "none" : "game-buttons-main"}>
      <Hit hit={hit} />
      <Stand stand={stand} />
      <Double double={double} isDoubleAllowed={isDoubleAllowed} />
    </div>
  );
}
export default GameButtons;
