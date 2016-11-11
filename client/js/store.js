var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var reducers = require('./reducers/cheese');

var store = createStore(reducers.cheeseReducer, applyMiddleware(thunk));
module.exports  = store;
