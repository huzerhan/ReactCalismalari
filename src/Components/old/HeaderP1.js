import React from "react";

function Header() {
  return (
    <div>
      <nav className="header">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            className="logo"
          />
          <span className="logo--text">ReactFacts</span>
        </div>
        <span className="header--text">React Course - Project 1</span>
      </nav>
    </div>
  );
}

export default Header;
