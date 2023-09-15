import { React, useState } from "react";
import "./ModeSwitcher.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const sun =
  "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon =
  "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";

function setLight() {
  const container = document.getElementsByClassName("theme-container")[0];
  const themeIcon = document.getElementById("theme-icon");

  container.classList.remove("shadow-dark");
  setTimeout(() => {
    container.classList.add("shadow-light");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = sun;
}
function setDark() {
  const container = document.getElementsByClassName("theme-container")[0];
  const themeIcon = document.getElementById("theme-icon");

  container.classList.remove("shadow-light");
  setTimeout(() => {
    container.classList.add("shadow-dark");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = moon;
}

// Change the icons inside the button based on previous settings

const Toggle = () => {
  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setDark();
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setLight();
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setLight();
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setDark();
    }
  }
};

const ModeSwitcher = () => {
  const { changeMode } = useContext(ThemeContext);

  let toggletheme = localStorage.getItem("color-theme")
    ? localStorage.getItem("color-theme") === "light"
      ? "shadow-light"
      : "shadow-dark"
    : "shadow-dark";

    let toggleIcon = localStorage.getItem("color-theme")
    ? localStorage.getItem("color-theme") === "light"
      ? "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg"
      : "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
    : "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";


  return (
    <div
      id="theme-toggle"
      className={`theme-container ${toggletheme}`}
      onClick={(eo) => {
        changeMode(
          localStorage.getItem("color-theme") === null
            ? "dark"
            : localStorage.getItem("color-theme") === "dark"? "light" :"dark"
        );
        Toggle();
      }}
    >
      <img
        id="theme-icon"
        src={toggleIcon}
        alt="Sun/moon"
      />
    </div>
  );
};

export default ModeSwitcher;
