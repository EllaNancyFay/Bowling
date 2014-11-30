function Game() {
	this.frames = [];
};

Game.prototype.setup = function() {
	for(var i = 0; i <= 9; i++) {
	this.frames[i] = new Frame(i);
	};
};
