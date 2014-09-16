
var BlinkyDancer = function(top, left, timeBetweenSteps){
    Dancer.call(this, top, left, timeBetweenSteps);
 };

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  console.log(BlinkyDancer);
  Dancer.prototype.step(this, this.timeBetweenSteps);
  this.$node.toggle();
};

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

