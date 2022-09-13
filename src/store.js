import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postReducer } from "./reducers/postReducer";
// import { postReducer } from "./reducers/postReducer";

const reducer = combineReducers({
  posts: postReducer,
});

// console.log(postReducer);

let initialState = {};
const middleware = [thunk];

const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
