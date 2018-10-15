const initialState = { noMatch: false};

const route = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_NO_MATCH':
			return { ...state, noMatch: action.payload }
		default:
			return state;
	}
}

export default route;