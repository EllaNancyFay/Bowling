describe('Frame', function() {

	beforeEach(function() {
		frame = new Frame
	});

	it("should hold it's score", function() {
		expect(frame.score instanceof Array).toBe(true)
	});

	it('should hold the result of each bowl in the score', function() {
		frame.bowl(4)
		expect(frame.score).toEqual([4])
	});

	it("should know it's total score", function() {
		frame.bowl(1)
		frame.bowl(3)
		frame.tally()
		expect(frame.totalScore).toEqual(4)
	});

});