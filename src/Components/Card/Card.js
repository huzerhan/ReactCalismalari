import React from "react";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

function Card() {
  return (
    <div className="card">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default Card;
