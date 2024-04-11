import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { trackerReducer } from "./reducers";

const store = createStore(trackerReducer, applyMiddleware(thunk));

export default store;
