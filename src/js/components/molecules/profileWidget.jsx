var React = require('react');
var Link = require('react-router').Link;
var MQ = require('react-responsive');

var ProfileWidget = React.createClass({
	render() {
		var username = this.props.name;
		
		return (
			<div className='profile-widget'>
				<MQ maxWidth={479}>
					<Link to='account' className='btn icon icon--user'>
						{username}
					</Link>
				</MQ>
				<MQ minWidth={480} maxWidth={719}>
					<Link to='account' className='btn dropdown'>
						{username}
					</Link>
				</MQ>
				<MQ minWidth={720}>
					<Link to='new' className='btn'>
						+ New Post
					</Link>
					<Link to='account' className='btn'>
						{username}
					</Link>
				</MQ>
			</div>
		);
	}
});

module.exports = ProfileWidget;