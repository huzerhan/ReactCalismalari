import React from "react";
import memesData from "./memesData";

export default function From() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const random = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[random].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main className="form--container">
      <div className="input-form">
        <input placeholder="Top text" type="text" />
        <input placeholder="Bottom text" type="text" />

        <button type="submit" onClick={getMemeImage}>
          Get a random meme image 🖼
        </button>
      </div>
      <div className="image-container">
        <img src={meme.randomImage} alt={"meme"} />
      </div>
    </main>
  );
}

//  bu da çalışır durumda ancak challenge'dan önce yapılmış
// export default function From() {
//   const [image, setImage] = React.useState();
//   const [imgIndex, setIndex] = React.useState();

//   const selectOptions = memesArray.map((x) => {
//     return <option value={x.name}>{x.name}</option>;
//   });

//   function handleClick() {
//     let random = Math.floor(Math.random() * memesArray.length);
//     setImage(memesArray[random].url);
//   }

//   function handleChange() {
//     const selectedIndex = document.getElementById("memes").selectedIndex;
//     setImage(memesArray[selectedIndex].url);
//   }

//   return (
//     <main className="form--container">
//       <div className="input-form">
//         <input placeholder="Top text" type="text" />
//         <input placeholder="Bottom text" type="text" />
//         <label className="input-select__label" for="memes">
//           Choose a meme:
//         </label>
//         <select
//           className="input-select"
//           onChange={handleChange}
//           name="memes-list"
//           id="memes"
//         >
//           {selectOptions}
//         </select>
//         <button type="submit" onClick={handleClick}>
//           Get a random meme image 🖼
//         </button>
//       </div>
//       <div className="image-container">
//         <img src={image} alt={"meme"} />
//       </div>
//     </main>
//   );
// }
