describe('Game', function() {

	beforeEach(function() {
		game = new Game
	});

it("should have frames", function() {
 	expect(game.frames instanceof Array).toBe(true)
});

it("should have a total of 10 frames", function() {
	game.setup()
	expect(game.frames.length).toEqual(10)
});

});