//#region

// const rootDiv = document.querySelector("#root");

// // ReactDOM.render(<p>takııılll</p>, document.querySelector("#root"));

// function Navbar() {
//     return (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <a className="navbar-brand" href="#">
//       Navbar
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>

//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item active">
//           <a className="nav-link" href="#">
//             Home <span className="sr-only">(current)</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//             Link
//           </a>
//         </li>
//         <li className="nav-item dropdown">
//           <a
//             className="nav-link dropdown-toggle"
//             href="#"
//             id="navbarDropdown"
//             role="button"
//             data-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             Dropdown
//           </a>
//           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <a className="dropdown-item" href="#">
//               Action
//             </a>
//             <a className="dropdown-item" href="#">
//               Another action
//             </a>
//             <div className="dropdown-divider"></div>
//             <a className="dropdown-item" href="#">
//               Something else here
//             </a>
//           </div>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" href="#">
//             Disabled
//           </a>
//         </li>
//       </ul>
//       <form className="form-inline my-2 my-lg-0">
//         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   </nav>)
// }

// function MainContent() {
//   return (
//     <div className="main-content">
//       <p>Benim yazdığım main content burada</p>
//     </div>
//   );
// }

// ReactDOM.render(
//   <div>
//     <Navbar />
//     <MainContent />
//     {/* başka bir şey */}
//   </div>,
//   document.querySelector("#root")
// );

// const newH1 = document.createElement("h1");
// newH1.textContent = "created by vanilla js";
// newH1.className = "header";
// document.querySelector("#root").appendChild(newH1);
// console.log(newH1);

// function Element() {
//   return (
//     <div>
//       <h1 className="header">This is JSX</h1>
//       <p>This is a paragraph</p>;
//     </div>
//   );
// }
// console.log(<Element />);

// ReactDOM.render(<Element />, rootDiv);

// const rootDiv = document.querySelector("#root");
// function Challenge1() {
//   return (
//     <nav>
//       <h1>Erhan Bok</h1>
//       <ul>
//         <li>Pricing</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// }

// ReactDOM.render(<Challenge1 />, rootDiv);

/* 49:57 Project 1 Part 1 - MarkUp */

// function Project1() {
//   return (
//     <div style={{ margin: "30px" }}>
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
//         width="60px"
//       />
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Wake</li>
//         <li>Has well over 100k stars on GitHub</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(
//   <div>
//     <Project1 />
//   </div>,
//   rootDiv
// );

// import Header from "./Components/Header.js";
// import Content from "./Components/old/Content.js";
// import Footer from "./Components/Footer.js";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Content />
//       <Footer />
//     </div>
//   );
// }

// import React from "react";
// import FactsApp from "./old/FactsP1";

// function App() {
//   return (
//     <div className="app">
//       <FactsApp />
//     </div>
//   );
// }
// export default App;

/* Card project*/

// import React from "react";
// import Card from "./Components/Card/Card.js";
// import Header from "./Components/Card/Header.js";

// function App() {
//   return (
//     <div>
//       <Card />
//     </div>
//   );
// }
// export default App;

/* Aribnb project*/

// import React from "react";
// import Airbnb from "./Components/Airbnb/Airbnb";

// function App() {
//   return (
//     <div>
//       <h1></h1>
//       <Airbnb />
//     </div>
//   );
// }
// export default App;

//  Props timestamp: 3.11.20

// import React from "react";
// import Card from "./Components/Props/Card";
// import kZaferes from "./Components/Airbnb/katieZaferes.png";

// function App() {
//   return (
//     <div>
//       {/* <Card
//         image="./Components/Airbnb/katieZaferes.png"
//         title="Life lessons with Katie Zaferes"
//         price="136"
//         rating="5"
//         comments="5"
//         country="USA"
//       />
//       <Card
//         image="./Components/Airbnb/Airbnb_Logo_Bélo.svg.png"
//         title="Title 1"
//         price="45"
//         rating="4"
//         comments="6"
//         country="TR"
//       />
//       <Card
//         image="./Components/Airbnb/katieZaferes.png"
//         title="Title 2"
//         price="56"
//         rating="4"
//         comments="10"
//         country="DE"
//       />
//       <Card
//         image="./Components/Airbnb/katieZaferes.png"
//         title="Title 3"
//         price="90"
//         rating="2"
//         comments="2"
//         country="NL"
//       /> */}
//     </div>
//   );
// }
// export default App;

// import React from "react";
// import JokeApp from "./Components/Jokes/JokeApp";

// function App() {
//   return <JokeApp />;
// }
// export default App;

//#endregion

// export default function App() {
//   const colors = [
//     "Red",
//     "Orange",
//     "Yellow",
//     "Green",
//     "Blue",
//     "Indigo",
//     "Violet",
//   ];
//   return (
//     <div>
//       {colors.map((x) => (
//         <h3>{x}</h3>
//       ))}
//     </div>
//   );
// }

// import React from "react";
// import Joke from "./Components/Jokes/Joke";
// import jokes from "./Components/Jokes/jokesArr";

// function App() {
//   console.log(jokes);
//   const jokeElements = jokes.map((jk) => {
//     return <Joke setup={jk.setup} punchline={jk.punchline} />;
//   });
//   return <div>{jokeElements}</div>;
// }
// export default App;

// import React from "react";
// import Airbnb from "./Components/Airbnb/Airbnb";

// // proplar Airbnb içerisinde çağırıldı
// export default function App() {
//   return (
//     <div>
//       <Airbnb />
//     </div>
//   );
// }

// import React from "react";
// import MyTravels from "./Components/My Travels/MyTravels";

// export default function App() {
//   return (
//     <div>
//       <MyTravels />
//     </div>
//   );
// }

import React from "react";
import MemeGenerator from "./Components/MemeGenerator/MemeGenerator";

export default function App() {
  function handleClick() {
    console.log("click");
  }
  return (
    <div>
      <MemeGenerator />
    </div>
  );
}
