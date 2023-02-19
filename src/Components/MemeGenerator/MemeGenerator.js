import Header from "./Header";
import Form from "./Form";
import "./style.css";

export default function MemeGenerator() {
  return (
    <div className="meme-gen--container">
      <Header />
      <Form />
    </div>
  );
}
