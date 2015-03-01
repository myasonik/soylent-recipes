var React = require('react');

var Welcome = React.createClass({
	render() {
		return (
			<p>Welcome, {this.props.displayName}!</p>
		);
	}
});

module.exports = Welcome;