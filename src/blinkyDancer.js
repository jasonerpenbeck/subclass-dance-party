
var BlinkyDancer = function(top, left, timeBetweenSteps){
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('blinky');
 };

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};

BlinkyDancer.prototype.lineUp = function() {

  // Raider Only Lineup
  var dancerArray = window.dancers;
  for(var i = 0; i < dancerArray.length; i++) {
    if(dancerArray[i].hasClass("blinky")) {
      dancerArray[i].css({left: 1000 + Math.random() * 150});
    }
  }
};

