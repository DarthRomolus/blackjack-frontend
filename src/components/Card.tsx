import { useState } from "react";
import "../css/card.css";
interface cardProps {
  src: string;
  isNewCard: Boolean;
  isDealer: Boolean;
}
function Card({ src, isNewCard, isDealer }: cardProps) {
  const [isNew, setIsnew] = useState<Boolean>(isNewCard);
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
