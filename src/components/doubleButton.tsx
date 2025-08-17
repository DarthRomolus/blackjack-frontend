interface doubleProps {
  double: () => void;
}
function Double({ double }: doubleProps) {
  return (
    <div className="start-button-main">
      <button onClick={double}>double</button>
    </div>
  );
}
export default Double;
