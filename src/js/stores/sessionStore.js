var Reflux = require('reflux');
var actions = require('../actions/sessionActions.js');
var Firebase = require('firebase');
var ref = new Firebase('https://vivid-heat-5157.firebaseio.com');
var usersRef = ref.child('users');

var userData = {
	name: '',
	picture: null,
	auth: false
};

var sessionStore = Reflux.createStore({
	listenables: actions,
	
	init() {
		this.user = userData;

		ref.onAuth(authData => {
			if (authData) {
				let thisUserRef = usersRef.child(authData.uid);
				thisUserRef.once('value', snapshot => {
					if (snapshot.exists()) {
						this.user = snapshot.val();
					} else {
						let user = {
							f_name: authData.facebook.displayName.split(' ')[0],
							picture: authData.facebook.cachedUserProfile.picture.data.url,
							auth: true,
							id: authData.uid
						};
						this.user = user;
						thisUserRef.set(user);
					}
					
					this.trigger(this.user);
				});
			} else {
				this.user = userData;
				this.trigger(this.user);
			}

		});
	},
	
	getDefaultData() {
		return this.user;
	}
});

module.exports = sessionStore;
