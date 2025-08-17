import Start from "./startButton";
import Hit from "./hitButton";
import Stand from "./standButton";
import Double from "./doubleButton";
interface gameButtonProps {
  start: () => void;
  hit: () => void;
  stand: () => void;
  double: () => void;
}
function GameButtons({ start, hit, stand, double }: gameButtonProps) {
  return (
    <div className="game-buttons-main">
      <Start start={start} />
      <Hit hit={hit} />
      <Stand stand={stand} />
      <Double double={double} />
    </div>
  );
}
export default GameButtons;
