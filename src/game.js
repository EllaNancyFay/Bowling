function Game() {
	this.frames = [];
};

Game.prototype.setup = function() {
	for(var i = 0; i <= 9; i++) {
	this.frames[i] = new Frame(i);
	};
};

Game.prototype.playFrame = function(bowlOne, bowlTwo) {
  var frame = new Frame();
  frame.bowl(bowlOne);
  frame.bowl(bowlTwo);
  this.frames.push(frame.score);
};
