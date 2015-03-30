var React = require('react');
var Link = require('react-router').Link;
var actions = require('../../actions/sessionActions');

var RecipeItem = React.createClass({
	render() {
		return (
			<li>
				<span>{this.props.data.creator}</span>
				<span>{this.props.data.rating}</span>
				<span>{this.props.data.summary}</span>
			</li>
		);
	}
});

module.exports = RecipeItem;
