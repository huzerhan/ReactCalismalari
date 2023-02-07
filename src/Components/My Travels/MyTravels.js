import Header from "./Header";
import TravelsData from "./TravelsData";
import Travel from "./Travel";
import "./style.css";

export default function MyTravels() {
  const travel = TravelsData.map((item) => {
    return <Travel key={item.id} data={item} />;
  });
  return (
    <div className="travel--container">
      <Header />
      {travel}
    </div>
  );
}
