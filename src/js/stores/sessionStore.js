var Reflux = require('reflux');
var actions = require('../actions/sessionActions.js');
var Firebase = require('firebase');
var ref = new Firebase('https://vivid-heat-5157.firebaseio.com');
var usersRef = ref.child('users');

var userData = {
	username: '',
	name: '',
	auth: false
};

var sessionStore = Reflux.createStore({
	listenables: actions,
	
	init() {
		this.user = userData;
	
		ref.onAuth((authData) => {
			if (authData) {
				this.user = {
					username: '',
					name: authData.facebook.displayName.split(' ')[0],
					auth: true
				};
			} else {
				this.user = userData;
			}
			
			this.trigger(this.user);
		});
	},
	
	getDefaultData() {
		return this.user;
	}
});

module.exports = sessionStore;