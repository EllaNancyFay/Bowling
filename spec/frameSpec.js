describe('Frame', function() {

	beforeEach(function() {
		frame = new Frame
	});

	it('should hold 10 ten pins', function() {
		expect(frame.pins).toEqual(10);
	});

	it('pins should get knocked down', function() {
		frame.bowl(4)
		expect(frame.pins).toEqual(6);
	});

});