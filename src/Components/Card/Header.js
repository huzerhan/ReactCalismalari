import React from "react";

import "./Card.css";

function Header() {
  return (
    <div className="header">
      <img
        className="profile-pic"
        src="https://scontent.fsaw2-2.fna.fbcdn.net/v/t1.6435-9/196803728_3176490335928558_3490087992020935768_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bfP0OeQ0wocAX_SLdDv&_nc_ht=scontent.fsaw2-2.fna&oh=00_AfCJ8QArVAJ4bh5sWnCMB3fxTFWmqOutwPxFHdgVMtm_tQ&oe=63C5BEA2"
      />
      <h2>Erhan Huz</h2>
      <small>Frontend Developer</small>
      <a href="#">huzerhan.website</a>
    </div>
  );
}

export default Header;
