import "./Airbnb.css";
import kZaferes from "./katieZaferes.png";

function Card() {
  return (
    <div className="card">
      <div
        className="card--image"
        style={{ backgroundImage: `url(${kZaferes})` }}
      ></div>
      <div className="card-bottom">
        <div className="card--rating">
          <span>⭐ 5.0</span>
          <span className="gray">(6) . </span>
          <span className="gray">USA</span>
        </div>
        <div className="card--title">Life lessons with Katie Zaferes</div>
        <div className="card--price">
          <strong>From $136 </strong> / person
        </div>
      </div>
    </div>
  );
}

export default Card;
