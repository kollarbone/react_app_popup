import React from "react";
import "./Notification.css";

export default function Notification(props) {
  return (
    <div
      className={
        props.theme === "light"
          ? "dropdowm_notification"
          : "dropdowm_notification__dark"
      }
    >
      <div className="new_notifications">You have new message</div>
      <div className="new_notifications">You have new friend</div>
      <div className="new_notifications">You have new post</div>
    </div>
  );
}
