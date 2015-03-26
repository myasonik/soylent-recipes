var React = require('react');
var Link = require('react-router').Link;
var actions = require('../../actions/sessionActions');

var RecipeItem = React.createClass({
	render() {
		return (
			<li>
				<Link>
					<span>{this.props.data.creator}</span>
					<span>{this.props.data.rating}</span>
					<span>{this.props.data.summary}</span>
				</Link>
			</li>
		);
	}
});

module.exports = RecipeItem;
