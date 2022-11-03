import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducer";

export const store = legacy_createStore(mainReducer, applyMiddleware(thunk));
