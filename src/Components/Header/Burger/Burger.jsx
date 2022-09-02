import React, { useState } from "react";
import "./Burger.css";
import { NavLink } from "react-router-dom";

export default function Burger(props) {
  const [burger_class, setBurgerClass] = useState("burger_bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger_bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger_bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className={props.theme === "light" ? "burger" : "burger__dark"}>
      <nav>
        <div className="burger_menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <div className="items">
          <NavLink
            to="/profileContent"
            className={props.theme === "light" ? "item" : "item__dark"}
            activeclassname="active"
          >
            Profile
          </NavLink>
        </div>
        <div className="items">
          <NavLink
            to="/messages"
            className={props.theme === "light" ? "item" : "item__dark"}
            activeclassname="active"
          >
            Messages
          </NavLink>
        </div>
        <div className="items">
          <NavLink
            to="/products"
            className={props.theme === "light" ? "item" : "item__dark"}
            activeclassname="active"
          >
            Products
          </NavLink>
        </div>
        <div className="items">
          <NavLink
            to="/news"
            className={props.theme === "light" ? "item" : "item__dark"}
            activeclassname="active"
          >
            News
          </NavLink>
        </div>
        <div className="items">
          <NavLink
            to="/people"
            className={props.theme === "light" ? "item" : "item__dark"}
            activeclassname="active"
          >
            People
          </NavLink>
        </div>
        <div className="items">
          <NavLink
            to="/music"
            className={props.theme === "light" ? "item" : "item__dark"}
            activeclassname="active"
          >
            Music
          </NavLink>
        </div>
        <br></br>
        <div className="items">
          <NavLink
            to="/settings"
            className={props.theme === "light" ? "item" : "item__dark"}
            activeclassname="active"
          >
            Settings
          </NavLink>
        </div>
      </div>
    </div>
  );
}
