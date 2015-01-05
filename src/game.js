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

    if (i === 8 && this.frames[8].specialScore === 'strike') {
      this.bonuses.push(this.frames[9].score.sum());
    }

    if (this.frames[i].specialScore === 'strike' && this.frames[i + 1].score[0] != 10) {
      this.bonuses.push(this.frames[i + 1].score.sum())
    }

    if (this.frames[i].specialScore === 'strike' && this.frames[i + 1].specialScore === 'strike') {
      if(this.frames[i + 2] === undefined) {
        this.bonuses.push(0)
      }
      else {
        this.bonuses.push(this.frames[i + 1].score[0] + this.frames[i + 2].score[0])
      };  
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

Game.prototype.calculateTotal = function() {
  return (this.bonuses.sum() + this.totalScore.sum())
};



