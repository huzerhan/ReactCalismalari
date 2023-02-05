import React from "react";
import "./styleP1.css";
import ContentP1 from "./ContentP1";
import HeaderP1 from "./HeaderP1";

function FactsApp() {
  return (
    <div className="fact-container">
      <div className="bg-image"></div>
      <HeaderP1 />
      <ContentP1 />
    </div>
  );
}

export default FactsApp;
