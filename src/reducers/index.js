import {combineReducers} 		from "redux";
import quizReducer 				from "./quiz.reducer";

const AllReducers = combineReducers({
	quiz: quizReducer,
});

export default AllReducers;
