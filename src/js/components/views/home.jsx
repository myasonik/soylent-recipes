var React = require('react');
var Reflux = require('reflux');

var RecipeItem = require('../atoms/recipeItem.jsx');

var recipeStore = require('../../stores/recipeStore');

var Home = React.createClass({
	mixins: [Reflux.connect(recipeStore, 'recipes')],

	getInitialState() {
		return { recipes: [] };
	},

	render() {
		return (
			<main>
				<p>Home</p>
				<ul>
					{ this.state.recipes.map(recipe => <RecipeItem key={recipe.id} data={recipe} />) }
				</ul>
			</main>
		);
	}
});

module.exports = Home; 