var Reflux = require('reflux');
var Firebase = require('firebase');
var ref = new Firebase('https://vivid-heat-5157.firebaseio.com');
var recipeRef = ref.child('recipes');

var actions = require('../actions/recipeActions.js');

var sessionStore = Reflux.createStore({
	listenables: actions,

	init() {
		recipeRef.on('value', this.updateRecipes.bind(this));
	},

	updateRecipes(snapshot) {
		if (snapshot) {
			let recipes = snapshot.val();
			let arr = [];
			for (let i of Object.keys(recipes)) {
				arr.push(recipes[i]);
			}
			this.trigger(arr);
			// this.trigger([ for(i of Object.keys(recipes)) recipes[i] ]); // why doesn't this work?
		} else {
			console.log('Recipe update error.');
		}
	}
});

module.exports = sessionStore;