export const selectLanguage = (language) => {
	return {
		type: "ON_SELECT_LANGUAGE",
		payload: {
			title: language
		}
	};
};
