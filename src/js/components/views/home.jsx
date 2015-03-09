var React = require('react');
var Reflux = require('reflux');

var recipeStore = require('../../stores/recipeStore');

var Home = React.createClass({
	mixins: [Reflux.connect(recipeStore, 'recipes')],

	getInitialState() {
		return { recipes: {} };
	},

	render() {
		var recipes = this.state.recipes;

		return (
			<main>
				<p>Home</p>
				<ul>
					{
						let i = 0;
						let len = recipes.length;
						for (i; i < len; i++) {
							recipes[i];
						}
					}
					{recipes.foreach(function(data, i) {
						return ({data});
						// return (<RecipeItem data={data} />);
					})}
				</ul>
			</main>
		);
	}
});

module.exports = Home; 