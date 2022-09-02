import React from "react";
import "./MyMessage.css";

export default function MyMessage(props) {
  return (
    <div className="mymessages_item">
      <div className="mymessage">
        <div className="mytext_message"> {props.text}</div>
        <img alt="dialogPhoto" src={props.image} />
      </div>
    </div>
  );
}
