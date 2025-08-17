interface hitProps {
  hit: () => void;
}
function Hit({ hit }: hitProps) {
  return (
    <div className="start-button-main">
      <button onClick={hit}>hit</button>
    </div>
  );
}
export default Hit;
