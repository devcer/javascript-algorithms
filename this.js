function log() {
    let color = "orange";
    return function() {
        console.log(this.color);
    } 
}
log()();
let logCopy = log().bind({color: "blue"});
logCopy();