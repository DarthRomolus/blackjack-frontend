interface standProps {
  stand: () => void;
}
function Stand({ stand }: standProps) {
  return (
    <div className="stand-button-main">
      <button onClick={stand} className="game-buttons">
        <img src="/assets/stop-sign.png" />
      </button>
    </div>
  );
}
export default Stand;
