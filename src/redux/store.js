import { applyMiddleware, createStore } from "redux";
import combainReducer from "./Reducers/combainReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

export default createStore(combainReducer,composeWithDevTools(applyMiddleware(thunk)))