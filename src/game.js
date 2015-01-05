function Game() {
	this.frames = [];
  this.bonuses = [];
  this.totalScore = [];

  for(var i = 0; i <= 9; i++) {
   this.frames[i] = new Frame(i);
  };
};  

Game.prototype.applyBonus = function() {
  for (var i=0; i < 9; i++) {
    if (this.frames[i].specialScore === 'spare') {
      this.bonuses.push(this.frames[i + 1].score[0])
    }

    if (this.frames[i].specialScore === 'strike' && this.frames[i + 1].score[0] != 10) {
      this.bonuses.push(this.frames[i + 1].score.sum())
    }

    if (this.frames[i].specialScore === 'strike' && this.frames[i + 1].specialScore === 'strike') {
      this.bonuses.push(this.frames[i + 1].score[0] + this.frames[i + 2].score[0])
    }

    else {
      return 'No bonus'
    }
  };
};

Game.prototype.pushTotal = function() {
  for (var i=0; i < 10; i++) {
    this.totalScore.push(this.frames[i].score.sum())
  };
};



