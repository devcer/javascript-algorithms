let person = {
	firstname: 'tom',
	lastname: 'harris',
	getFullName: function() {
		return `${this.firstname} ${this.lastname}`;
	}
}
function log() {
	console.log(`FullName: ${this.getFullName()}`);
}
// log(); // throws error;
let newLog = log.bind(person);
newLog();
// console.log(person.getFullName());

Function.prototype.mybind = function(obj) {
	let func = this;
	return function() {
		func.call(obj);
	}
}
let myNewlog = log.mybind(person);
myNewlog();