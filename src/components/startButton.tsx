import "../css/start.css";
interface startProps {
  start: () => void;
  isActive: boolean;
}
function Start({ start, isActive }: startProps) {
  return (
    <div className={isActive ? "game-active" : "start-button-main"}>
      <button onClick={start} className="start-button">
        start
      </button>
    </div>
  );
}
export default Start;
