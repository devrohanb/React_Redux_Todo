import { createStore, combineReducers } from "redux";

import todos from "./reducer/todoReducer";

const rootReducer = combineReducers({ todos });

const store = createStore(rootReducer);

export default store;
