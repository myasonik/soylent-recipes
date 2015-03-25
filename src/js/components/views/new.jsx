var React = require('react');
var Router = require('react-router');

var actions = require('../../actions/recipeActions');

var New = React.createClass({
	mixins: [ Router.Navigation ],

	handleSubmit() {
		event.preventDefault();

		actions.add(Object.assign({
			creator: 'me',
			date: new Date(),
		}, this.getFormData()));
		
		this.transitionTo('/');
	},

	getFormData() {
		return {
			title: this.refs.title.getDOMNode().value,
			summary: this.refs.summary.getDOMNode().value
		}
	},

	render() {
		return (
			<main>
				<form onSubmit={this.handleSubmit}>
					<input placeholder='Recipe Title' ref='title' />
					<label>
						<p>Summary</p>
						<textarea ref='summary'></textarea>
					</label>
					<fieldset>
						<legend>Ingredients</legend>
						<input ref='ingredient1' />
						<input ref='ingredient2' />
					</fieldset>
					<fieldset>
						<legend>Instructions</legend>
						<textarea ref='instruction1' ></textarea>
						<textarea ref='instruction2'></textarea>
					</fieldset>
					<label>
						<p>Prep time</p>
						<input type='number' ref='prepTime'/>
					</label>
					<label>
						<p>Cook time</p>
						<input type='number' ref='cookTime' />
					</label>
					<button>
						Submit Recipe
					</button>
				</form>
			</main>
		);
	}
});

module.exports = New;