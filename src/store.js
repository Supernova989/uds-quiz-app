import AllReducers from "./reducers";
import thunkMiddleware from "redux-thunk";
import {applyMiddleware, createStore, compose} from "redux";
import {createLogger} from "redux-logger";


const composeEnhancers =
	typeof window === 'object' && "production" !== process.env.NODE_ENV &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = [thunkMiddleware];

if ("production" !== process.env.NODE_ENV) {
	console.log("development mode!");
	middleware.push(createLogger());
}

const enhancer = composeEnhancers(applyMiddleware(...middleware));


export const store = createStore(AllReducers, enhancer);
