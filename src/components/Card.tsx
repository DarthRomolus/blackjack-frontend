import { useState } from "react";
import "../css/card.css";
interface cardProps {
  src: string;
}
function Card({ src }: cardProps) {
  return (
    <div className="card-background">
      <img src={src} />
    </div>
  );
}
export default Card;
