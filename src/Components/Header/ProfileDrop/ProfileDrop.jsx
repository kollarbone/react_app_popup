import React from "react";
import "./ProfileDrop.css";

export default function ProfileDrop(props) {
  return (
    <div
      className={
        props.theme === "light" ? "dropdowm_profile" : "dropdowm_profile__dark"
      }
    >
      <div className="profileHello">Hello,</div>
      <div className="profileName">{props.profileName}</div>
      <div className="profileSettings">Edit profile</div>
      <button className="exitAccount">Exit account</button>
    </div>
  );
}
