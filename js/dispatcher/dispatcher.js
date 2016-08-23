var assign = require('object-assign'),
	_callbacks = [],
	promises = [],
	Dispatcher = function() {};

Dispatcher.prototype =  assign({}, Dispatcher.prototype, {
	register: function(callback) {
		_callbacks.push(callback);
		return _callbacks.length - 1;
	},


	dispatch: function(payload) {
		var resolves = [],
			rejects = [];

		_promises = _callbacks.map(function(_, i) {
			return new Promise(function(resolve, reject) {
				resolves[i] = resolve;
				rejects[i] = reject;
			});
		});

		_callbacks.forEach(function(callback, i) {
			promise.resolve(callback(payload)).then(function() {
				resolves[i](payload);
			},function() {
				rejects[i](new Error("Dispatcher callback unsuccessfull"));;
			})
		});

		_promises = [];
	}, 

	waitFor: function(promiseIndexs, callback) {
		var selectedPromises = promiseIndexs.map(function(index) {
			return _promises[index];
		});

		return promise.all(selectedPromises).then(callback);
	}
});


module.exports = Dispatcher;



