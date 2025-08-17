interface startProps {
  start: () => void;
}
function Start({ start }: startProps) {
  return (
    <div className="start-button-main">
      <button onClick={start}>start</button>
    </div>
  );
}
export default Start;
