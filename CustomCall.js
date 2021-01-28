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

log.call(person, 'Engineer', 'Mr.');

Function.prototype.mycall = function(obj) {
  let args = Array.from(arguments).slice(1);
	obj.func = this;
	return obj.func(...args);
}
log.mycall(person, 'Engineer', 'Mr.');