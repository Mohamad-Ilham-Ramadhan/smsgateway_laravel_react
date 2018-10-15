const initialState = {
    isSidebarHide: false,
    isSidebarShowMobile: false,
};

const UI = ( state = initialState, action ) => {
	switch ( action.type ) {
		case 'SET_SIDEBAR_HIDE': 
			return { ...state, isSidebarHide: action.payload }
		case 'SET_SIDEBAR_SHOW_MOBILE': 
			return { ...state, isSidebarShowMobile: action.payload }
		default: 
			return state;
	}
}

export default UI;