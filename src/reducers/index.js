import {combineReducers} 		from "redux";
import configReducer 			from "./config.reducer";

const AllReducers = combineReducers({
	config: configReducer,
});

export default AllReducers;
