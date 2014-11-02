function Frame() {
	this.score = [];
	this.totalScore = 0;
	this.specialScore = null;
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

Frame.prototype.setSpecialScore = function() {
	if (this.score.indexOf('10') != -1) {
		this.specialScore = 'strike' }
};