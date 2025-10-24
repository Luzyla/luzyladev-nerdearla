import { useState } from "react";
import avatarLu from "./assets/luzyladev/LuzylaDev.png";
import "./App.css";

function App() {
  return (
    <>
      <picture>
        <img src={avatarLu} alt="" />
      </picture>
      <h1>Nerdearla Luzyla Dev test</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
