function Pin() {
 	this.isUpright = true
};


Pin.prototype.hit = function() {
	this.isUpright = false;
};