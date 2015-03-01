var React = require('react');
var actions = require('../../actions/sessionActions');
var MQ = require('react-responsive');

/*
var ProfileWidget = React.createClass({
	handleClick: function() {
	   actions.logout();
	},
	
	render: function() { 
		return (
			<div>
				<button
					className='btn'
					onClick = {this.handleClick}
				>
					Logout
				</button>
			</div>
		);
	}
});
*/

var ProfileWidget = React.createClass({
	newPost() {

	},
	
	render() {
		var username = this.props.name;
		
		return (
			<div className='profile-widget'>
				<MQ maxWidth={479}>
					<button className='btn icon icon--user'>
						{username}
					</button>
				</MQ>
				<MQ minWidth={480} maxWidth={719}>
					<button className='btn dropdown'>
						{username}
					</button>
				</MQ>
				<MQ minWidth={720}>
					<button className='btn'>
						+ New Post
					</button>
					<button className='btn'>
						{username}
					</button>
				</MQ>
			</div>
		);
	}
});

module.exports = ProfileWidget;