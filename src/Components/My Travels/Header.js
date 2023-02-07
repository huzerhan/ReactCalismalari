import logo from "./icon.png";

export default function Header() {
  return (
    <div className="header--container">
      <header className="header">
        <img className="header--icon" src={logo} alt="icon" />
        <span className="header--text">Travel Journal</span>
      </header>
    </div>
  );
}
