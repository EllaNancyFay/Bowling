describe('Pin', function() {

beforeEach(function() {
	pin = new Pin;
});

it('should be upright once created', function() {
	expect(pin.isUpright).toBe(true);
});

it('should change status when hit', function(){
	pin.hit(pin);
 	expect(pin.isUpright).toBe(false);
});

}); 

describe('Frame', function() {

	beforeEach(function() {
		frame = new Frame
		pin = new Pin
	});

	it('should hold pins', function() {
		expect(frame.pins instanceof Array).toBe(true);
	});

	it('should hold 10 ten pins', function() {
		expect(frame.pins.length).toEqual(10);
	});

	it('should be able to knock down a number of pins', function() {
		frame.bowl(0, 4)
		expect(frame.pins.length).toEqual(6);
	});

	it('should add the result to the score', function() {
		frame1 = new Frame;
		frame1.bowl(0, 4)
		expect(frame1.score).toEqual([4]);
	});

	it('should only have a maximum of two bowls', function() {
		frame2 = new Frame;
		frame2.bowl(0, 3);
		frame2.bowl(0, 5);
		expect(frame2.go()).toEqual('over');
	});

	it('should know the score of the frame', function() {
		frame3 = new Frame;
		frame3.bowl(0, 4);
		frame3.bowl(0, 2);
		expect(frame3.score.sum()).toEqual(6);
	});

	it('should move onto the next frame when strike', function() {
		frame4 = new Frame
		frame4.bowl(0, 10)
		expect(frame.go()).toEqual('over');
	});


});