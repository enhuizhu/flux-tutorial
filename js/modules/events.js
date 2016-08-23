var events = function() {
	this.eventList = [];
}

events.prototype.emit = function() {
	if (!this.eventList[eventName]) {
		return false;
	}

	this.eventList[eventName]();
}


events.prototype.on = function() {
	if (typeof cb != "function") {
		return false;
	}

	if (typeof eventName != "string") {
		return false;
	}

	this.eventList[eventName] = cb;
}

module.exports = events;