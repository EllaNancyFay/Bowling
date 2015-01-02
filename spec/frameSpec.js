describe('Frame', function() {

	var frame;

	beforeEach(function() {
		frame = new Frame();
	});

	it('should be able to hold a score', function() {
		expect(frame.score instanceof Array).toBe(true);
	});

	it('should know the result of each bowl', function() {
		frame.bowl(4);
		expect(frame.score).toEqual([4]);
	});

	it('should know total score', function() {
		frame.bowl(1);
		frame.bowl(3);
		frame.tally();
		expect(frame.totalScore).toEqual(4);
	});

	it('should keep track of special scores', function() {
		expect(frame.specialScore).toEqual(null);
	});

	it('should know if a strike is scored', function() {
		frame.bowl(10);
		frame.setSpecialScore();
		expect(frame.specialScore).toEqual('strike');
	});

	it('should know if a spare is scored', function() {
		frame.bowl(3);
		frame.bowl(7);
		frame.tally();
		expect(frame.specialScore).toEqual('spare');
	});

});