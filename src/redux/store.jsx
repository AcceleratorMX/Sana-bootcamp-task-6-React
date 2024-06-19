import {applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import rootReducer from "./reducers/root";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";

const initialState = {};

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

const composeEnhancers = composeFunc(applyMiddleware(thunk));

const store = createStore(rootReducer(),initialState, composeEnhancers);

export default store;