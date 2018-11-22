export const selectLanguage = (language) => {
	return {
		type: "ON_SELECT_LANGUAGE",
		payload: {
			code: language
		}
	};
};

export const abort_quiz = () => {
	return {
		type: 'ON_ABORT'
	}
};

export const accept_answer = (id, option) => {
	return {
		type: 'ACCEPT_ANSWER',
		payload: {id, option}
	}
};
