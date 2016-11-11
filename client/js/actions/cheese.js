 var fetch = require('isomorphic-fetch');


var FETCH_CHEESES = 'FETCH_CHEESES';

var fetchCheeses = function(cheeses) {
	return function(dispatch) {
		var url='/cheeses';
		return fetch(url).then(function(response) {
			if (response.status < 200 || response.status >= 300) {
				var error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response;
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			return dispatch(
				fetchCheesesSuccess(data)
			);
		})
 		.catch(function(error) {
 			return dispatch(
 				fetchCheesesError(error)
 			);
 		});
	}
};


var FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
var fetchCheesesRequest = function(cheeses) {
	return {
		type: FETCH_CHEESES_REQUEST,
		cheeses: cheeses
	}
}

var FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
var fetchCheesesSuccess = function(cheeses) {
	return {
		type: FETCH_CHEESES_SUCCESS,
		cheeses: cheeses
	}
}

var FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
var fetchCheesesError = function(error) {
	return {
		type: FETCH_CHEESES_ERROR,
		error: error
	}
}




exports.FETCH_CHEESES = FETCH_CHEESES;
exports.fetchCheeses = fetchCheeses;
exports.FETCH_CHEESES_REQUEST = FETCH_CHEESES_REQUEST;
exports.fetchCheesesRequest = fetchCheesesRequest;
exports.FETCH_CHEESES_SUCCESS = FETCH_CHEESES_SUCCESS;
exports.fetchCheesesSuccess = fetchCheesesSuccess;
exports.FETCH_CHEESES_ERROR = FETCH_CHEESES_ERROR;
exports.fetchCheesesError = fetchCheesesError;






