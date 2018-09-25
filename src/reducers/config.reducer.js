const defaultState = {
	title: null,
	currentQuestion: 1,
	answersGiven: []
};

export default function (state = defaultState, action) {
	switch (action.type) {
		case 'ON_SELECT_LANGUAGE':
			state = Object.assign({}, state, {title: action.payload.title});
			// console.log('here: ', state);
			break;
		case 'ON_SELECT_ANSWER':
			
			break;
		default:
			
			break;
	}
	return state;
}
