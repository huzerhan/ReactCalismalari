import "./style.css";
import dummyImage from "./photo-1589308078059-be1415eab4c3.jpg";

export default function Travel(props) {
  return (
    <div className="travel--card">
      <div>
        <img className="card--image" src={dummyImage} />
      </div>
      <div className="card--data">
        <span>
          📍{props.data.location}{" "}
          <a className="location-link" href={props.data.coordinates}>
            See on Map
          </a>
        </span>
        <p className="card--date">{props.data.date}</p>
        <h2>{props.data.name}</h2>

        <p className="card--desc">{props.data.desc}</p>
      </div>
    </div>
  );
}
