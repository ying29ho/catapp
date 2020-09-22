import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === "development";

export default createStore(
  reducer,
  applyMiddleware(thunk, isDev ? logger : (s) => (n) => (a) => n(a))
);
