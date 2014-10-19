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
	frame = new Frame;
	it('should hold pins', function() {
		expect(frame.pins).toEqual([]);
	});

});