var React = require('react');
var Link = require('react-router').Link;

var actions = require('../../actions/sessionActions');

var Account = React.createClass({
	handleClick() {
		actions.logout();
	},

	render() {
		return (
			<main>
				<Link to='app' className='btn' onClick={this.handleClick} >
					Logout
				</Link>
			</main>
		);
	}
});

module.exports = Account;