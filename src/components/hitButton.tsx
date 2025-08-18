interface hitProps {
  hit: () => void;
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
