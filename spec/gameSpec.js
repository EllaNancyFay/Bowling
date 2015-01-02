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

  it('should save the bonus score when a spare is scored', function() {
    game.frames[0].bowl(6);
    game.frames[0].bowl(4);
    console.log(game.frames[0].specialScore)
    game.frames[1].bowl(1);
    game.frames[1].bowl(4);
    game.frames[0].tally();
    game.applyBonus();
    expect(game.bonuses).toEqual([1]);  
  });

});