var React = require('react');
var Router = require('react-router');
var RouteHandler = require('react-router').RouteHandler;

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var Header = require('./components/sections/header.jsx');
var Footer = require('./components/sections/footer.jsx');
var Home = require('./components/views/home.jsx');
var Account = require('./components/views/account.jsx');
var New = require('./components/views/new.jsx');

var App = React.createClass({
	render() {
		return (
			<div>
				<Header />
				<RouteHandler />
				<Footer />
			</div>
		);
	}
});

var routes = (
	<Route name ='app' path='/' handler={ App }>
		<DefaultRoute handler={ Home } />
		<Route name='account' path='/account' handler={ Account } />
		<Route name='new' path='/new' handler={ New } />
	</Route>
);

Router.run(routes, Router.HistoryLocation, Handler => React.render(<Handler />, document.body));
