import Hit from "./hitButton";
import Stand from "./standButton";
import Double from "./doubleButton";

import "../css/gameButtons.css";
interface gameButtonProps {
  hit: () => void;
  stand: () => void;
  double: () => void;
}
function GameButtons({ hit, stand, double }: gameButtonProps) {
  return (
    <div className="game-buttons-main">
      <Hit hit={hit} />
      <Stand stand={stand} />
      <Double double={double} />
    </div>
  );
}
export default GameButtons;
