var React = require('react');
var Reflux = require('reflux');

var recipeStore = require('../../stores/recipeStore');

var Recipe = React.createClass({
	mixins: [Reflux.connect(recipeStore)],

	render() {
		let recipe = recipeStore.getRecipeBySlug(this.props.params.recipeSlug);

		if (recipe) {
			return (
				<main>
					<h1>{recipe.title}</h1>
					<p>{recipe.summary}</p>
				</main>
			);
		} else {
			return <main></main>;
		}
	}
});

module.exports = Recipe;