function Frame() {
	this.pins = 10
	this.score = [];
};

Frame.prototype.bowl = function(number) {
	this.pins -= number;
};