import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";

export default function Dialogs(props) {
  return (
    <div className="dialogs">
      <div className="dialog" activeClassName="active">
        <NavLink to={props.id} className="dialog_item" activeClassName="active">
          <img alt="dialogPhoto" src={props.image} />
          <div className="dialogName">{props.name}</div>
        </NavLink>
      </div>
    </div>
  );
}
