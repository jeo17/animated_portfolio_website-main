import { React, useState } from "react";
import "./ModeSwitcher.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Sun from "../assets/sun.png";
import Moon from "../assets/moon.png"



function setLight() {
  const container = document.getElementsByClassName("theme-container")[0];
  const themeIcon = document.getElementById("theme-icon");

  container.classList.remove("shadow-dark");
  setTimeout(() => {
    container.classList.add("shadow-light");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = Sun;
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
  themeIcon.src = Moon;
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
      ? Sun
      : Moon
    : Moon;


  return (
    <div
      id="theme-toggle"
      className={`theme-container ${toggletheme} hover:scale-95 cursor-pointer`}
      onClick={() => {
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
