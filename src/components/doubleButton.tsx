interface doubleProps {
  double: () => void;
}
function Double({ double }: doubleProps) {
  return (
    <div className="double-button-main">
      <button onClick={double} className="game-buttons">
        <img src="/assets/double-point.png" />
      </button>
    </div>
  );
}
export default Double;
