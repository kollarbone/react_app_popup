import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import "./NavBar__dark.css";

export default function NavBar(props) {
  return (
    <nav className={props.theme === "light" ? "navBar" : "navBar__dark"}>
      <br></br>
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
    </nav>
  );
}
