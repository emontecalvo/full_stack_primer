var actions = require('../actions/cheese');

var initialState = {
	cheeses: [],
	loading: false,
	error: null
}



var cheeseReducer = (state, action) => {
	var copyState = state || initialState;

	state = Object.assign({}, copyState);
	if (action.type === actions.FETCH_CHEESES_REQUEST) {
		state.loading = true
	} else if (action.type === actions.FETCH_CHEESES_SUCCESS) {
		state.loading = false;
		state.error = null;
		state.cheeses = action.cheeses;
	} else if (action.type === actions.FETCH_CHEESES_ERROR) {
		state.loading = false;
		state.error = actions.error;
	}
	return state;

};


exports.cheeseReducer = cheeseReducer;








exports.cheeseReducer = cheeseReducer;