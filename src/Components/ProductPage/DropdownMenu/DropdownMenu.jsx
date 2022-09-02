import React from "react";
import "./DropdownMenu.css";

export default function DropdownMenu(props) {
  const options = [100, 50, 25, 10];
  return (
    <div
      className={
        props.theme === "light" ? "dropdownMenu" : "dropdownMenu__dark"
      }
    >
      {options.map((options) => (
        <div
          className={
            props.theme === "light"
              ? "dropdownOptions"
              : "dropdownOptions__dark"
          }
          onClick={(e) => {
            props.setSelected(options);
            props.setIsActive = false;
          }}
        >
          {options}
        </div>
      ))}
    </div>
  );
}
