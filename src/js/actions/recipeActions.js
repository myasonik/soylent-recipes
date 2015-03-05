var Reflux = require('reflux');
var Firebase = require('firebase');
var ref = new Firebase('https://vivid-heat-5157.firebaseio.com');
var usersRef = ref.child('recipes');

var actions = Reflux.createActions([
	'add'
]);

actions.add.preEmit = function() {
	
};

module.exports = actions;