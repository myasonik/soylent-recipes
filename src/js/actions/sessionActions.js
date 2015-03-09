var Reflux = require('reflux');
var Firebase = require('firebase');
var ref = new Firebase('https://vivid-heat-5157.firebaseio.com');
var usersRef = ref.child('users');

var actions = Reflux.createActions([
	'login',
	'logout'
]);

actions.login.preEmit = function() {
	ref.authWithOAuthPopup('facebook', function(err, authData) {
		if (err) {
			alert('Login failed', error);
		}
	});
};

actions.logout.preEmit = function() {
	ref.unauth();
};

module.exports = actions;