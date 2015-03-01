var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Route.RouteHandler;

var Header = require('./components/sections/header.jsx');
var Home = require('./components/views/home.jsx');
var Account = require('./components/views/account.jsx');

var routes = (
	<Route>
		<DefaultRoute handler={ Home } />
		<Route name='account' path='user/:username' handler={ Account } />
	</Route>
);

Router.run(routes, Handler => React.render(
	<div>
		<Header />
		<RouteHandler />
	</div>
, document.body));
