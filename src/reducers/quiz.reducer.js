const defaultState = {
	title: null,
	questions: [],
	currentQuestion: 0,
	answersGiven: []
};

export default function (state = defaultState, action) {
	switch (action.type) {
		case 'ON_SELECT_LANGUAGE':
			const newState = {};
			window.quizData.forEach(data => {
				if (data.code === action.payload.code) {
					newState.title = data.title;
					newState.questions = data.questions;
				}
			});
			state = Object.assign({}, state, newState);
			// console.log('title: ', state);
			break;
		case 'ON_SELECT_ANSWER':
			
			break;
		default:
			
			break;
	}
	return state;
}
