var React = require('react');
var Link = require('react-router').Link;
var actions = require('../../actions/sessionActions');

var RecipeItem = React.createClass({
	render() {
		return (
			<li>
				<Link>
					<span>{data.creator}</span>
					<span>{data.rating}</span>
					<span>{data.summary}</span>
				</Link>
			</li>
		);
	}
});

module.exports = RecipeItem;
