describe('Frame', function() {

	beforeEach(function() {
		frame = new Frame
	});

	it("should be able to hold a score", function() {
		expect(frame.score instanceof Array).toBe(true)
	});

	it('should know the result of each bowl', function() {
		frame.bowl(4)
		expect(frame.score).toEqual([4])
	});

	it("should know it's total score", function() {
		frame.bowl(1)
		frame.bowl(3)
		frame.tally()
		expect(frame.totalScore).toEqual(4)
	});

	it("should have a status", function() {
		expect(frame.status).toEqual(null);
	});

});