import "../css/restart.css";
interface restartProps {
  restart: () => void;
}
function Restart({ restart }: restartProps) {
  return (
    <>
      <div className="restart-container">
        <button onClick={restart} className="restart-button">
          <img src="/assets/restart.png" />
        </button>
      </div>
    </>
  );
}
export default Restart;
