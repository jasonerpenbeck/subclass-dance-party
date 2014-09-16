
var BlinkyDancer = function(top, left, timeBetweenSteps){
    // Dancer.call(this);
    // this.oldStep = Dancer.prototype.step;
    this.left = left;
    this.top = top;
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node = $('<span class="dancer"></span>');
    this.$node.css(styleSettings = {"top": this.top, "left": this.left});

    // this.$node.css(this.setPosition(this.top,this.left));
    //   styleSettings = {"top": this.top, "left": this.left});

// console.log(this.$node);
return this.$node;
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
// BlinkyDancer.prototype.step = function(){
//   // call the old version of step at the beginning of any call to this new version of step

//   this.oldStep();

//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();
// };



// this.step();
