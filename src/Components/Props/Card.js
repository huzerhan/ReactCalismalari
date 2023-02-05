import "./Airbnb.css";
import kZaferes from "./katieZaferes.png";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div
        className="card--image"
        style={{ backgroundImage: `url(${kZaferes})` }}
      >
        {/* <img src={`${props.image}`} />  burası neden böyle anlamadım*/}
      </div>
      <div className="card-bottom">
        <div className="card--rating">
          <span>⭐ {props.rating}</span>
          <span className="gray">({props.comments}) . </span>
          <span className="gray">{props.country}</span>
        </div>
        <div className="card--title">{props.title}</div>
        <div className="card--price">From ${props.price} / person"</div>
      </div>
    </div>
  );
}

export default Card;
