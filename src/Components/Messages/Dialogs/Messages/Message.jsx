import React from "react";
import "./Message.css";

export default function Message(props) {
  return (
    <div className="messages_item">
      <div className="message">
        <img alt="dialogPhoto" src={props.image} />
        <div
          className={
            props.theme === "light" ? "text_message" : "text_message__dark"
          }
        >
          {" "}
          {props.text}
        </div>
      </div>
    </div>
  );
}
