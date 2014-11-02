function Frame() {
	this.score = [];
	this.totalScore = 0;
	this.status = null;
};

Frame.prototype.bowl = function(number) {
	this.score.push(number)
};

Array.prototype.sum = function() { 
	for (var i = 0, L = this.length, sum = 0; i < L; sum += this[i++]);
	return sum; 
};

Frame.prototype.tally = function() {
	this.totalScore = this.score.sum()
};