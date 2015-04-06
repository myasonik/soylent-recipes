var React = require('react');
var Link = require('react-router').Link;
var actions = require('../../actions/sessionActions');

var RecipeItem = React.createClass({
	render() {
		let data = this.props.data;

		return (
			<li>
				<Link
					to='recipe'
					params={{recipeSlug: data.slug}}
				>
					<span>{data.creator}</span>
					<span>{data.rating}</span>
					<span>{data.title}</span>
					<span>{data.summary}</span>
				</Link>
			</li>
		);
	}
});

module.exports = RecipeItem;
