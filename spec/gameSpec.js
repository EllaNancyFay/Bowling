describe('Game', function() {

  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it('should have frames', function() {
   	expect(game.frames instanceof Array).toBe(true);
  });

  it('should have a total of 10 frames', function() {
  	expect(game.frames.length).toEqual(10);
  });

  it('should be able to play a frame', function() {
    game.frames[0].bowl(3);
    game.frames[0].bowl(4);
    expect(game.frames[0].score).toEqual([3, 4]);
  });

  it('saves the bonus score when a spare is scored', function() {
    game.frames[0].bowl(6);
    game.frames[0].bowl(4);
    game.frames[1].bowl(1);
    game.frames[1].bowl(4);
    game.frames[0].tally();
    game.applyBonus();
    expect(game.bonuses).toEqual([1]);  
  });

  it('saves the bonus score when a strike is scored', function() {
    game.frames[0].bowl(10);
    game.frames[1].bowl(1);
    game.frames[1].bowl(1);
    game.frames[0].tally();
    game.applyBonus();
    expect(game.bonuses).toEqual([2]);
  });

  it('saves the bonus score when consecutive strikes are scored', function() {
    game.frames[0].bowl(10);
    game.frames[1].bowl(10);
    game.frames[2].bowl(10);
    game.frames[3].bowl(1);
    game.frames[3].bowl(1);
    game.frames[0].tally();
    game.frames[1].tally();
    game.frames[2].tally();
    game.applyBonus();
    expect(game.bonuses).toEqual([20, 11, 2])
  });

  it('should add the result of the bonus ball to the score', function() {
    game.frames[9].bowl(10);
    game.frames[9].bowl(10);
    game.frames[9].tally();
    game.frames[9].bonusBall(10);
    expect(game.frames[9].score).toEqual([10, 10, 10]);
  });

  it('should be able to calculate the sum of all frames played', function() {
    game.frames[0].bowl(1);
    game.frames[0].bowl(1);
    game.frames[1].bowl(1);
    game.frames[1].bowl(1);
    game.pushTotal(frame);
    expect(game.totalScore.sum()).toEqual(4);
  });

  it('should generate a score of 300 for a perfect game', function() {
    game.frames[0].bowl(10);
    game.frames[1].bowl(10);
    game.frames[2].bowl(10);
    game.frames[3].bowl(10);
    game.frames[4].bowl(10);
    game.frames[5].bowl(10);
    game.frames[6].bowl(10);
    game.frames[7].bowl(10);
    game.frames[8].bowl(10);
    game.frames[9].bowl(10);
    game.frames[9].bowl(10);
    game.frames[0].tally();
    game.frames[1].tally();
    game.frames[2].tally();
    game.frames[3].tally();
    game.frames[4].tally();
    game.frames[5].tally();
    game.frames[6].tally();
    game.frames[7].tally();
    game.frames[8].tally();
    game.frames[9].tally();
    game.applyBonus();
    game.frames[9].bonusBall(10);
    game.pushTotal(frame);
    console.log(game.bonuses)
    console.log(game.totalScore)
    expect(game.calculateTotal()).toEqual(300);
  });

});