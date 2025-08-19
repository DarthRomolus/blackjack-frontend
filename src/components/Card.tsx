import { useState } from "react";
import "../css/card.css";
interface cardProps {
  src: string;
  isNewCard: boolean;
  isDealer: boolean;
}
function Card({ src, isNewCard, isDealer }: cardProps) {
  const [isNew, setIsnew] = useState<boolean>(isNewCard);
  return (
    <div
      className={`card-main ${
        isNew ? (isDealer ? "card-dealer--new" : "card-player--new") : ""
      }`}
      onAnimationEnd={() => {
        setIsnew(false);
      }}
    >
      <img src={src} />
    </div>
  );
}
export default Card;
