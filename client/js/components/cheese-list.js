var React = require('react');
var connect = require('react-redux').connect;
var ReactDOM = require('react-dom');
var actions = require('../actions/cheese');

var CheeseList = React.createClass({
	componentDidMount: function() {
		this.props.dispatch(actions.fetchCheeses());
	},

	render: function() {

		var cheeses = this.props.cheeses.map(function(cheese, index) {
			return <li key={index}>{cheese}</li>
		});

		return (
			<div>
				<ul>
					{cheeses}
				</ul>
			</div>
		)
	},
});

var mapStateToProps = function(state, props) {
	console.log(state);
	return {
		cheeses: state.cheeses
	};
};


//for teting only:
// var Container = connect(mapStateToProps)(CheeseList);
// Container.wrapped = CheeseList;


module.exports = connect(mapStateToProps)(CheeseList);

//CheeseList cheeses = ["", , , ]


//var CheeseList = React.createClass ({
	//dispatch an action that will fetch cheese

	// function render = ({
	// 	var cheeses = this.props.cheeses.map(function(cheese, index){

	// 	})

	// })






// * * * * * * * * * * THIS WAS THE 1ST PART OF THE ASSIGNMENT:
// Create a React component


// var React = require('react');

// var CheeseList = (props) => (

// 	var cheeses = props.cheeses.map(function(cheese, index) {
// 		<li key=index>{cheese}</li>
// 	})

// 	return (
// 		<div>
// 			<ul>
// 				{cheeses}
// 			</ul>
// 		</div>

// 	)
// )

// module.exports = CheeseList;


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *