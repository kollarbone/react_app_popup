import Messages from "./Messages";
import {
  onMessageChangeActionCreator,
  addMessageActionCreater
} from "../../Redux/messages-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state, theme) => {
  return {
    data: state.messages,
    theme: theme.theme
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessageActionCreater: () => {
      dispatch(addMessageActionCreater());
    },
    onMessageChangeActionCreator: (text) => {
      dispatch(onMessageChangeActionCreator(text));
    }
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
