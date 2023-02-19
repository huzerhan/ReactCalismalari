import React from "react";
import memesData from "./memesData";
let url;
export default function From() {
  const [image, setImage] = React.useState();

  function handleClick() {
    const memesArray = memesData.data.memes;
    let random = Math.floor(Math.random() * memesArray.length);
    setImage(memesArray[random].url);
  }

  return (
    <main className="form--container">
      <div className="input-form">
        <input placeholder="Top text" type="text" />
        <input placeholder="Bottom" type="text" />
        <button type="submit" onClick={handleClick}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="image-container">
        <img src={image} />
      </div>
    </main>
  );
}
