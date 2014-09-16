
var BlueJumper = function(top, left, timeBetweenSteps){
    Dancer.call(this, top, left, timeBetweenSteps);
    // this.$node.addClass('blueJumper');
 };

BlueJumper.prototype = Object.create(Dancer.prototype);
BlueJumper.prototype.constructor = BlueJumper;

BlueJumper.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('blueJumper');
  this.$node.toggleClass('crazyBlue');
};

