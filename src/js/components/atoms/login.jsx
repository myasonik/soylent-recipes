var React = require('react');
var actions = require('../../actions/sessionActions');

var Login = React.createClass({
	handleClick() {
		actions.login();
	},
	
	render() {
		return (
			<button
				className='btn'
				onClick={this.handleClick}
			>
				Login w/ Facebook
			</button>
		);
	}
});

module.exports = Login;
