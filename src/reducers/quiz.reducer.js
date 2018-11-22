import atob from "atob";
const utf8 = require("utf8");

const defaultState = {
	data: JSON.parse(utf8.decode(atob(window.quizData))),
	title: null,
	code: null,
	questions: [],
	currentQuestion: 0,
	answersGiven: []
};

export default function (state = defaultState, action) {
	switch (action.type) {
		case 'ON_SELECT_LANGUAGE':
			const newState = {};
			state.data.forEach(data => {
				if (data.code === action.payload.code) {
					newState.title = data.title;
					newState.code = data.code;
					newState.questions = data.questions;
				}
			});
			state = {...state, ...newState};
			break;
		
		case 'ACCEPT_ANSWER':
			state = {
				...state,
				currentQuestion: state.currentQuestion + 1,
				answersGiven: [
					...state.answersGiven, {id: action.payload.id, option: action.payload.option}
				]
				
			};
			break;
		
		case 'ON_ABORT': {
			state = {
				...state,
				questions: [],
				code: null,
				currentQuestion: 0,
				answersGiven: [],
				title: null
			};
			break;
		}
		
		default:
			
			break;
	}
	return state;
}
