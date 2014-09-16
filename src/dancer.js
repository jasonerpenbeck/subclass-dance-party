// Creates and returns a new makedancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
//possibly refactor to makeDancer later

    // use jQuery to create an HTML <span> tag
    // console.log(this);
    // var dancerContext = this;
    this.$node = $('<span class="dancer"></span>');
    this.left = left;
    this.top = top;
    this.timeBetweenSteps = timeBetweenSteps;
    this.setPosition(this.top, this.left);
    this.step();


  };

  Dancer.prototype.step = function(){
    // the basic makedancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
    //<span class="makedancer" style="{top: top, left: left}"></span>
  };

  Dancer.prototype.lineUp = function(){
    console.log(window.dancers);
    for(var i = 0; i < window.dancers.length; i++) {
      currentDancer = window.dancers[i];
      currentDancer.setPosition(0,window.dancers[i].css('top'));
    }

    // the basic makedancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  // now that we have defined the makedancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body


