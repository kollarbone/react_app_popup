import React from "react";
import classes from "./Post.module.css";

export default function Post(props) {
  return (
    <div className={classes.post}>
      <div className={classes.left}>
        <div className={classes.icon}>
          <img alt="postImg" src={props.img} />
        </div>
        <div>
          <p className={classes.text}>{props.message}</p>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.like}>
          <img
            alt="like"
            src="https://pngshare.com/wp-content/uploads/2021/06/Instagram-Like-Button-Transparent-3.png"
          />
        </div>
        <div className={classes.likeCount}>
          <p className={classes.count}>{props.count}</p>
        </div>
      </div>
    </div>
  );
}
