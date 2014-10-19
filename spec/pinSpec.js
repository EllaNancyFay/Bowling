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

	beforeEach(function(){
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

});