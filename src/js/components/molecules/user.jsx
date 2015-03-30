var React = require('react');
var Reflux = require('reflux');

var Login = require('../atoms/login.jsx');
var ProfileWidget = require('./profileWidget.jsx');

var sessionStore = require('../../stores/sessionStore');

var User = React.createClass({
	mixins: [Reflux.connect(sessionStore, 'user')],
	
	getInitialState() {
		return { user: sessionStore.getDefaultData() };
	},
	
	onStoreUpdate(user) {
		this.setState(user);
	},
	
	render() {
		var user = this.state.user;

		return (
			<div>
				{ user.auth ? <ProfileWidget name={user.f_name}/> : <Login /> }
			</div>
		);
	}
});

module.exports = User;