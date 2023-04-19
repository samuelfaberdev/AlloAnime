import React from "react";
import "./NavBar.scss";

export default function NavBar() {
  const handleClickBurger = () => {
    const burger = document.getElementById("burger");
    const ul = document.querySelector("ul");
    burger.classList.toggle("open");
    ul.classList.toggle("open");
  };

  return (
    <header>
      <img
        src="./src/assets/logo/Logo_AlloAnime.png"
        alt="logo AlloAnime"
        width="350"
        height="60"
      />
      <label>
        <input type="text" placeholder="" name="seach" />
      </label>
      <nav>
        <button type="button" id="link" onClick={handleClickBurger}>
          <span id="burger" />
        </button>
        <ul>
          <li>Films</li>
          <li>Series</li>
          <li>Les plus regardes</li>
        </ul>
      </nav>
    </header>
  );
}
