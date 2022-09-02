import React, { useState } from "react";
import "./Header.css";
import "./Header__dark.css";
import Burger from "./Burger/Burger";
import GoBack from "./GoBack/GoBack";
import { FaFire } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import Notification from "./Notification/Notification";
import ProfileDrop from "./ProfileDrop/ProfileDrop";

export default function Header(props) {
  const [dropdown_class, setDropdownClass] = useState("dropdown_hidden");
  const [profile_dropdown_class, setProfileDropdownClass] = useState(
    "profile_dropdown_hidden"
  );
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  let profileName = props.store.getState().profile.profile_data[0].name;
  const updateNotification = () => {
    if (!isDropdownClicked) {
      setDropdownClass("dropdown_visible");
    } else {
      setDropdownClass("dropdown_hidden");
    }
    setIsDropdownClicked(!isDropdownClicked);
  };
  const updateProfile = () => {
    if (!isDropdownClicked) {
      setProfileDropdownClass("profile_dropdown_visible");
    } else {
      setProfileDropdownClass("profile_dropdown_hidden");
    }
    setIsDropdownClicked(!isDropdownClicked);
  };
  return (
    <div className={props.theme === "light" ? "header" : "header__dark"}>
      <div className="burger">
        <Burger theme={props.theme} />
      </div>
      <div className="goBack">
        <GoBack theme={props.theme} />
      </div>
      <div className={props.theme === "light" ? "logo" : "logo__dark"}>
        <FaFire />
        <a>GenshinPol</a>
      </div>
      <div className="header_icon">
        <div
          className={props.theme === "light" ? "settings" : "settings__dark"}
        >
          <AiOutlineSetting />
        </div>
        <div
          onClick={updateProfile}
          className={
            props.theme === "light" ? "profileicon" : "profileicon__dark"
          }
        >
          <AiOutlineUser />
          <div className={profile_dropdown_class}>
            <ProfileDrop theme={props.theme} profileName={profileName} />
          </div>
        </div>
        <div
          onClick={updateNotification}
          className={
            props.theme === "light" ? "notification" : "notification__dark"
          }
        >
          <BsBell />
          <div className={dropdown_class}>
            <Notification theme={props.theme} />
          </div>
        </div>
        <div className="switchTheme">
          <span className={props.theme === "light" ? "theme" : "theme__dark"}>
            Theme:
          </span>
          <input
            type="checkbox"
            onChange={props.switchTheme}
            checked={props.theme === "dark" ? "checked" : ""}
          />
        </div>
      </div>
    </div>
  );
}
