let person = {
	firstname: 'tom',
	lastname: 'harris',
	getFullName: function() {
		return `${this.firstname} ${this.lastname}`;
	}
}
function log(job , title) {
	console.log(`FullName: ${title} ${this.getFullName()}, ${job}`);
}

log.apply(person, ['Engineer', 'Mr.']);

Function.prototype.myapply = function(obj) {
  let args = Array.from(arguments)[1];
	obj.func = this;
	return obj.func(...args);
}
log.myapply(person, ['Engineer', 'Mr.']);