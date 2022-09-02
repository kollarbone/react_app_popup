import React from "react";
import "./ProfileContent.css";
import MyImages from "./MyImages/MyImages";
import PostsContainer from "./Posts/PostsContainer";
import { useParams } from "react-router-dom";
import "./ProfileContent__dark.css";

export default function ProfileContent(props) {
  let profileLink = useParams();
  let profileID = profileLink.profileID;

  let data = props.store.getState().profile.profile_data;
  let state = data[profileID];

  if (!profileID) {
    state = data[0];
  }
  let myImages = state.myimages.map((image) => (
    <MyImages key={image.id} images={image} />
  ));
  return (
    <div
      className={
        props.theme === "light" ? "ProfileContent" : "ProfileContent__dark"
      }
    >
      <div className="profileBackground">
        <img alt="profileBackground" src={state.background} />
      </div>
      <div className="profileThings">
        <div className="profile">
          <img alt="profileAvatar" src={state.image} />
          <div className="profileInfo">
            <p
              className={
                props.theme === "light" ? "profileName" : "profileName__dark"
              }
            >
              {state.name}
            </p>
            <div className="onlonepoint">
              <p className="online">Online</p>
            </div>
          </div>
        </div>
        <div className="myImages">
          <div
            className={props.theme === "light" ? "myImage" : "myImage__dark"}
          >
            My Photos
          </div>
          <div className="photos">{myImages}</div>
        </div>
      </div>
      <div className="posts">
        <PostsContainer theme={props.theme} store={props.store} />
      </div>
    </div>
  );
}
