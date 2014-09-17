
var BlueJumper = function(top, left, timeBetweenSteps){
    Dancer.call(this, 500, 800, 500);
    this.$node.toggleClass('blueJumper');
    this.$node.addClass('crazyBlue');
 };

BlueJumper.prototype = Object.create(Dancer.prototype);
BlueJumper.prototype.constructor = BlueJumper;

// BlueJumper.prototype.step = function() {
//   Dancer.prototype.step.call(this);
// };

