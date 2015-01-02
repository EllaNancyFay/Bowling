function Game() {
	this.frames = [];
  this.bonuses = [];

  for(var i = 0; i <= 9; i++) {
   this.frames[i] = new Frame(i);
  };
};  

Game.prototype.playFrame = function(bowlOne, bowlTwo) {
  frame.bowl(bowlOne);
  frame.bowl(bowlTwo);
  frame.tally();
};

Game.prototype.applyBonus = function() {
  for (var i=0; i < 9; i++) {
    if (this.frames[i].specialScore === 'spare') {
      this.bonuses.push(this.frames[i + 1].score[0])
    };
  };
};
