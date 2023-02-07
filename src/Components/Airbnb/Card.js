import "./Airbnb.css";

function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.country === "online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {
        badgeText && (
          <div className="card--badge">{badgeText}</div>
        ) /* this is now conditional rendering */
      }
      <div
        className="card--image"
        style={{ backgroundImage: `url(${props.item.imgUrl})` }}
      ></div>
      <div className="card-bottom">
        <div className="card--rating">
          <span>⭐ {props.item.rating}</span>
          <span className="gray">(6) . </span>
          <span className="gray">{props.item.country}</span>
        </div>
        <div className="card--title">{props.item.title}</div>
        <div className="card--price">
          <strong>From ${props.item.price} </strong> / person
        </div>
      </div>
    </div>
  );
}

export default Card;
