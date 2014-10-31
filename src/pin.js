function Pin() {
 	this.isUpright = true
};

Pin.prototype.hit = function() {
	this.isUpright = false;
};

function Frame() {
	this.pins = [];
	this.score = [];

	for (i=0; i < 10; i++){
	this.pins.push(pin)};
};

Frame.prototype.bowl = function(index, number) {
	this.pins.splice(index, number);
	this.score.push(number)
};

Frame.prototype.go = function() {
	if(this.score.length == 2) {
	return 'over'}
};