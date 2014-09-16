
var BlueJumper = function(top, left, timeBetweenSteps){
    Dancer.call(this, top, left, 500);
    this.$node.toggleClass('blueJumper');
    this.$node.addClass('crazyBlue');
 };

BlueJumper.prototype = Object.create(Dancer.prototype);
BlueJumper.prototype.constructor = BlueJumper;

// BlueJumper.prototype.step = function() {
//   Dancer.prototype.step.call(this);
// };

