import React from "react";
import { NavLink } from "react-router-dom";
import "./People.css";
import "./People__dark.css";

export default function People(props) {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div
      className={
        props.theme === "light" ? "peopleContent" : "peopleContent__dark"
      }
    >
      <div className={props.theme === "light" ? "pages" : "pages__dark"}>
        {pages.map((currentPage) => {
          return (
            <span
              onClick={() => {
                props.pageChange(currentPage);
              }}
              className={props.currentPage === currentPage && "selected"}
            >
              {currentPage}
            </span>
          );
        })}
      </div>
      {props.people.map((u) => (
        <div
          className={props.theme === "light" ? "details" : "details__dark"}
          key={u.id}
        >
          <span className="photofriend">
            <div className="image">
              <NavLink to={"/profileContent/" + u.id}>
                <img alt="people" src={u.image} />
              </NavLink>
            </div>
          </span>
          <span className="inform">
            <div
              className={
                props.theme === "light" ? "cardinfo" : "cardinfo__dark"
              }
            >
              <div className="name">{u.name},</div>
              <div className="age">{u.age}</div>
            </div>

            <div className="button">
              {u.friend ? (
                <button
                  onClick={() => {
                    props.unfollowActionCreator(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.followActionCreater(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
        </div>
      ))}
    </div>
  );
}
