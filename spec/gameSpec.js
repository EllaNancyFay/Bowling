describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game
  });

  it('should have frames', function() {
   	expect(game.frames instanceof Array).toBe(true);
  });

  it('should have a total of 10 frames', function() {
  	game.setup();
  	expect(game.frames.length).toEqual(10);
  });

  it('should be able to play a frame', function() {
    game.playFrame(2, 4)
    expect(game.frames).toEqual([[2, 4]])
  });

  it('should be able to play multiple frames', function() {
    game.playFrame(3, 3)
    game.playFrame(4, 6)
    expect(game.frames).toEqual([[3, 3], [4, 6]])
  });

});