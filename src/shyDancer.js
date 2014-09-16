
var ShyDancer = function(top, left, timeBetweenSteps){
    Dancer.call(this, top, left, timeBetweenSteps * 10000);
    this.$node.addClass('shyDancer');

 };

ShyDancer.prototype = Object.create(Dancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('rotate');
  this.$node.toggleClass('no-rotate');
};

