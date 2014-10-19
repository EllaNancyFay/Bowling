function Pin() {
 	this.isUpright = true
};

Pin.prototype.hit = function() {
	this.isUpright = false;
};

function Frame() {
	this.pins = [];
};

Frame.prototype.addPins = function(pin) {
	for (i=0; i < 10; i++){
	this.pins.push(pin)};
};
