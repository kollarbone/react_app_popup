import React from "react";
import "./Messages.css";
import Dialogs from "./Dialogs/Dialogs";
import Message from "./Dialogs/Messages/Message";
import "./Messages__dark.css";

export default function Messages(props) {
  let dialodElement = props.data.dialog_data.map((dialog) => (
    <Dialogs
      key={dialog.id}
      id={"/messages/" + dialog.id}
      name={dialog.name}
      image={dialog.image}
    />
  ));
  let messagesElement = props.data.messages_data.map((message) => (
    <Message
      theme={props.theme}
      key={message.id}
      text={message.message}
      image={message.image}
    />
  ));

  let onMessageChange = (event) => {
    let text = event.target.value;
    props.onMessageChangeActionCreator(text);
  };

  let add_message = () => {
    props.addMessageActionCreater();
  };

  return (
    <div
      className={
        props.theme === "light" ? "messages_items" : "messages_items__dark"
      }
    >
      <div className={props.theme === "light" ? "dialogs" : "dialogs__dark"}>
        {dialodElement}
      </div>
      <div className="activeDialog">
        <div
          className={props.theme === "light" ? "messages" : "messages__dark"}
        >
          {messagesElement}
        </div>
        <div className="sentMessage">
          <input
            onChange={onMessageChange}
            value={props.data.new_message_text}
            className="text"
            type="text"
          />
          <button onClick={add_message} className="button">
            Sent
          </button>
        </div>
      </div>
    </div>
  );
}
