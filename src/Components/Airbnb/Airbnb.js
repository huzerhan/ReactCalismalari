import "./Airbnb.css";
import Navbar from "./Navbar";
import Card from "./Card";
import ExpsArr from "./ExpsArr";

export default function Airbnb() {
  const exp = ExpsArr.map((item) => {
    console.log(item);
    return (
      <Card
        key={item.id}
        item={item}
        // {...item} this can also be used to send data to do component. you need to change "props.item" to just "props"
        // this way is cleaner but makes the data more comlicated to understand

        // imgUrl={item.imgUrl}
        // rating={item.rating}
        // country={item.country}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="main-container">
      <Navbar />
      <div className="card-container">{exp}</div>
    </div>
  );
}
