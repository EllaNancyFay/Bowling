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

  xit('should be able to play multiple frames', function() {
    game.playFrame(3, 3);
    game.playFrame(4, 6);
    expect(game.frames).toEqual([[3, 3], [4, 6]]);
  });

  xit('should save the bonus score when a strike is scored', function() {
    game.playFrame(10, 0);
    game.playFrame(1, 6);
    game.applyBonus();
    expect(game.bonuses).toEqual([1]);  
  });

});