var React = require('react');
var Router = require('react-router');

var New = React.createClass({
	mixins: [ Router.Navigation ],

	handleSubmit() {
		event.preventDefault();
		this.transitionTo('/');
	},

	render() {
		return (
			<main>
				<form onSubmit={this.handleSubmit}>
					<input placeholder='Recipe Title' />
					<label>
						<p>Summary</p>
						<textarea></textarea>
					</label>
					<fieldset>
						<legend>Ingredients</legend>
						<input />
						<input />
					</fieldset>
					<fieldset>
						<legend>Instructions</legend>
						<textarea></textarea>
						<textarea></textarea>
					</fieldset>
					<label>
						<p>Prep time</p>
						<input type='number' />
					</label>
					<label>
						<p>Cook time</p>
						<input type='number' />
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