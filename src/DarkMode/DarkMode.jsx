import React from "react";

import "./DarkMode.css";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
const setDarkmode = () => {
  document.querySelector("body").setAttribute("data-theme", "dark");
};
const setLigthmode = () => {
  document.querySelector("body").setAttribute("data-theme", "light");
};
const toggle = (e) => {
  if (e.target.checked) {
    setLigthmode();
  } else {
    setDarkmode();
  }
};
const DarkMode = () => {
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        onChange={toggle}
        type="checkbox"
        id="darkmode-toggle"
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Moon />
        <Sun />
      </label>
    </div>
  );
};

export default DarkMode;
