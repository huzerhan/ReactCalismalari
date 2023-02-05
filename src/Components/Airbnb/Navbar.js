import "./Airbnb.css";
import logo from "./Airbnb_Logo_Bélo.svg.png";
import hero from "./heroimage.png";

function Navbar() {
  return (
    <div className="header-container">
      <nav className="navbar">
        <img src={logo} />
      </nav>
      <div className="hero-image"></div>
      <div className="text-section">
        <h1>Online experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Navbar;
