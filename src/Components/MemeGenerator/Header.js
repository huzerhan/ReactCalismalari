import logo from "./Trollface_non-free.png";

export default function Header() {
  return (
    <div className="header--container">
      <div className="header">
        <img className="header--logo" src={logo} />
        <span>Meme Generator</span>
      </div>
    </div>
  );
}
