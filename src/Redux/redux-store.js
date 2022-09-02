import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import peopleReduser from "./people-reducer";

let reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  people: peopleReduser
});

let store = createStore(reducers);

export default store;
