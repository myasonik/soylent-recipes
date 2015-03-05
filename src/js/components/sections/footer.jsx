var React = require('react');

var Footer = React.createClass({
	render() {
		return (
			<footer className='page-footer'>
				<p>
					<span className='icon icon--user'>User icon</span> created by <a href='//thenounproject.com/jens/'>Jens Tärning</a>.
				</p>
			</footer>
		);
	}
});

module.exports = Footer;
