var React = require('react');
var Link = require('react-router').Link;

var User = require('../molecules/user.jsx');

var Header = React.createClass({
	render() {
		return (
			<header className='page-header'>
				<h1 className='page-header__logo'>
					<Link to='app'>
						Soylent Recipes
					</Link>
				</h1>
				<User />
			</header>
		);
	}
});

module.exports = Header;