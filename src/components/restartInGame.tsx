import "../css/restartInGame.css";
interface restartProps {
  restart: () => void;
}
function RestartInGame({ restart }: restartProps) {
  return (
    <div className="restart-container">
      <button onClick={restart} className="restart-button-in-game">
        <img src="/assets/restart.png" />
      </button>
    </div>
  );
}
export default RestartInGame;
