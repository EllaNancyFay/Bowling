function Game() {
	this.frames = [];
  this.entireScore = 0;
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
  frame.tally();
  this.frames.push(frame.totalScore);
};

Game.prototype.sumScore = function() {
  this.entireScore = this.frames.sum();
};