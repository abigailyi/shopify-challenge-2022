import React from "react";
import first from "./first.png";
import second from "./second.png";
import third from "./third.png";
import fourth from "./fourth.png";
import "./Card.css";

export default function Card(data) {
  let dailyImage = data.url;
  let dailyTitle = data.title;
  let dailyDate = data.date;
  let dailyDesc = data.explanation;
  let dailyCopy = data.copyright;

  return (
    <div className="Card">
      <div className="image-card">
        <img src={dailyImage} alt={dailyTitle} className="card-img" />
        <br />
        <h3>{dailyDate}</h3>
        <h2>{dailyTitle}</h2>
        <br />
        <p id="desc">{dailyDesc}</p>
        <br />
        <i className="fas fa-heart fa-lg"></i>
        <p id="copyright">Copyright: {dailyCopy}</p>
      </div>
    </div>
  );
}
