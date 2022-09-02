import {
  onPostChangeActionCreator,
  addPostActionCreater
} from "../../../Redux/profile-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";

let mapStateToProps = (state, theme) => {
  return {
    posts: state.profile,
    theme: theme.theme
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPostActionCreater: () => {
      dispatch(addPostActionCreater());
    },
    onPostChangeActionCreator: (text) => {
      dispatch(onPostChangeActionCreator(text));
    }
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
