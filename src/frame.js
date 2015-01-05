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
	this.totalScore = this.score.sum();
	this.setSpecialScore();
};

Frame.prototype.setSpecialScore = function() {
	if (this.score[0] === 10) {
		this.specialScore = 'strike' }
	else if (this.totalScore === 10) {
		this.specialScore = 'spare' }
};

Frame.prototype.bonusBall = function(number) {
	if (this.score.length === 2 && this.specialScore != null) {
		this.score.push(number)
	}

	else {
		return 'Game Over'
	}
};