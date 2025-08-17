interface standProps {
  stand: () => void;
}
function Stand({ stand }: standProps) {
  return (
    <div className="start-button-main">
      <button onClick={stand}>stand</button>
    </div>
  );
}
export default Stand;
