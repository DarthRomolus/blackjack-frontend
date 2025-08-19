interface doubleProps {
  double: () => void;
  isDoubleAllowed: Boolean;
}
function Double({ double, isDoubleAllowed }: doubleProps) {
  return (
    <div className="double-button-main">
      <button
        onClick={double}
        className={isDoubleAllowed ? "game-buttons" : "none"}
      >
        <img src="/assets/double-point.png" />
      </button>
    </div>
  );
}
export default Double;
