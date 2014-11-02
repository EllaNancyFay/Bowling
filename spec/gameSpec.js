describe('Game', function() {

	beforeEach(function() {
		game = new Game
	});

it("should have 10 frames", function() {
 	expect(game.frames instanceof Array).toBe(true)
});

});