import { createStore } from "redux";
import listUserReducer from "./component/reducer";

const store = createStore(listUserReducer);
export default store;
