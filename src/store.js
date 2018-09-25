import AllReducers from "./reducers";
import thunkMiddleware from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";

const middleware = [thunkMiddleware];

if ("production" !== process.env.NODE_ENV) {
	console.log("development mode!");
	middleware.push(createLogger());
}

export const store = createStore(AllReducers, applyMiddleware(...middleware));
