var Reflux = require('reflux');
var Firebase = require('firebase');
var ref = new Firebase('https://vivid-heat-5157.firebaseio.com');
var recipeRef = ref.child('recipes');

var actions = require('../actions/recipeActions.js');

var sessionStore = Reflux.createStore({
	listenables: actions,

	init() {
		this.recipes = [];
		
		recipeRef.on('value', snapshot => {
			if (snapshot) {
				let recipes = snapshot.val();

				for (let i of Object.keys(recipes)) {
					this.data.recipes.push(Object.assign({
						id: i
					}, recipes[i]));
				}
				this.trigger(this.data);

				// this.trigger([ for(i of Object.keys(recipes)) Object.assign({id: i, recipes[i]}) ]); // why doesn't this work?
			} else {
				console.log('Recipe update error.');
			}
		});
	},

	getDefaultData() {
		return this.recipes;
	}
});

module.exports = sessionStore;