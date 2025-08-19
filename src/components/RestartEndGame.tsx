import "../css/restartEndGame.css";
interface restartEndGameProps {
  restart: () => void;
}
function RestartEndGame({ restart }: restartEndGameProps) {
  return (
    <div className="restart-end-game">
      <button onClick={restart} className="restart-button-end-game">
        <span>start again</span>
      </button>
    </div>
  );
}
export default RestartEndGame;
