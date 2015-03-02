function Game(func) {
  this.frames = [];
  this.bonuses = [];
  this.totalScore = [];

  for(var i = 0; i <= 9; i++) {
    this.frames[i] = new func(i);
  };
};  

Game.prototype.applyBonus = function() {
  for  (var i=0; i < 9; i++) {
    this.handleSpare(i);
    this.handleStrike(i);
    this.handleConsecutiveStrikes(i);
  };
};


Game.prototype.handleSpare = function(i) {
  if (this.frames[i].specialScore === 'spare') {
    this.bonuses.push(this.frames[i + 1].score[0])
  }
  else {
    return 'No bonus';
  }
};

Game.prototype.handleStrike = function(i) {
  if (i === 8 && this.frames[8].specialScore === 'strike') {
    this.bonuses.push(this.frames[9].score.sum());
  }
  else if (this.frames[i].specialScore === 'strike' && this.frames[i + 1].score[0] != 10) {
    this.bonuses.push(this.frames[i + 1].score.sum())
  }
  else {
    return 'No bonus';
  }
};

Game.prototype.handleConsecutiveStrikes = function(i) {
  if (this.frames[i].specialScore === 'strike' && this.frames[i + 1].specialScore === 'strike') {
      if(this.frames[i + 2] === undefined) {
        this.bonuses.push(0)
      }
      else {
        this.bonuses.push(this.frames[i + 1].score[0] + this.frames[i + 2].score[0])
      }  
    }

  else {
    return 'No bonus';
  }
};

Game.prototype.pushTotal = function() {
  for (var i=0; i < 10; i++) {
    this.totalScore.push(this.frames[i].score.sum())
  };
};

Game.prototype.calculateTotal = function() {
  return (this.bonuses.sum() + this.totalScore.sum())
};

Game.prototype.tallyFrames = function() {
  for (var i=0; i < 10; i++) {
    this.frames[i].tally();
};

};

