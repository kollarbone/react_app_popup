import React from "react";
import "./Posts.css";
import Post from "./Post/Post";
import { useParams } from "react-router-dom";
import "../ProfileContent__dark.css";

export default function Posts(props) {
  let profileLink = useParams();
  let profileID = profileLink.profileID;
  let data = props.posts.post_data;
  let postElement = data.map((posts) => (
    <Post
      message={posts.message}
      key={posts.id}
      count={posts.count}
      img={posts.image}
    />
  ));

  let add_post = () => {
    props.addPostActionCreater();
  };
  let onPostChange = (event) => {
    let text = event.target.value;
    props.onPostChangeActionCreator(text);
  };

  return (
    <div className="profilePosts">
      <div className={props.theme === "light" ? "myPost" : "myPost__dark"}>
        My Post
      </div>
      <div className={props.theme === "light" ? "newPost" : "newPost__dark"}>
        <div className="text">
          <textarea
            onChange={onPostChange}
            value={props.posts.new_post_text}
            placeholder="Remember, be nice!"
          />
        </div>
        <div className="button">
          <button className="addPost" onClick={add_post}>
            Add Post
          </button>
        </div>
      </div>
      <div className={props.theme === "light" ? "myPosts" : "myPosts__dark"}>
        My Posts
      </div>
      <div className={props.theme === "light" ? "posts" : "posts__dark"}>
        {postElement}
      </div>
    </div>
  );
}
