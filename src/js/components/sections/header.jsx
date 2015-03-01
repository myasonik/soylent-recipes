var React = require('react');
var User = require('../molecules/user.jsx');

var Header = React.createClass({
	render() {
		return (
			<header>
				<h1>Soylent Recipes</h1>
				<User />
			</header>
		);
	}
});

module.exports = Header;