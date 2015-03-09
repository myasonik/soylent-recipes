var Reflux = require('reflux');
var Firebase = require('firebase');
var ref = new Firebase('https://vivid-heat-5157.firebaseio.com');
var recipeRef = ref.child('recipes');

var actions = require('../actions/recipeActions.js');

var sessionStore = Reflux.createStore({
	listenables: actions,

	init() {
		recipeRef.on('child_added', this.updateRecipes.bind(this));
	},

	updateRecipes(snapshot) {
		console.log(snapshot.val());
		if (snapshot) {
			this.trigger(snapshot.val());
		} else {
			console.log('Recipe update error.');
		}
	}
});

module.exports = sessionStore;