import React from "react";
import classes from "./MyImages.module.css";

export default function MyImages(props) {
  return (
    <div className={classes.image}>
      <img alt="photo" src={props.images} />
    </div>
  );
}
