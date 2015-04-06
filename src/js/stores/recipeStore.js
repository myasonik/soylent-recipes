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
				this.recipes = [];

				snapshot.forEach(recipe => {
					this.recipes.push(Object.assign({
						id: recipe.key()
					}, recipe.val()));
				});

				this.trigger(this.recipes);
			} else {
				console.log('Recipe update error.');
			}
		});
	},

	availableSlug(testSlug) {
		let slugsLength = this.recipes.map(el => {
			// Not perfect test but will match more, not less, so it's good enough
			return el.slug.startsWith(testSlug);
		}).length;

		return slugsLength ? `${testSlug}-${slugsLength}` : testSlug;
	},

	getDefaultData() {
		return this.recipes;
	},

	getRecipeBySlug(slug) {
		return this.recipes.find(el => slug === el.slug ? slug : false);
	}
});

module.exports = sessionStore;