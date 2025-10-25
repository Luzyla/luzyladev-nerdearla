import avatarLu from "./assets/luzyladev/LuzylaDev.png";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="montserrat">Nerdearla Luzyla Dev test</h1>
      <div className="card">
        <div className="card__container-text">
          <p className="card__text">Hey! I'm Lucila (a.k.a. Luzyla Dev)</p>
          <button className="btn ">Add my contact just with one click!</button>
        </div>

        <picture className="card__container-image">
          <img src={avatarLu} alt="" className="container-image__image" />
        </picture>
      </div>
    </>
  );
}

export default App;
