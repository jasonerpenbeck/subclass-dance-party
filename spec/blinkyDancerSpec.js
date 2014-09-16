describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("blueJumper", function() {

  var blueJumper;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blueJumper = new BlueJumper(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blueJumper.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node explode using toggle", function() {
    sinon.spy(blueJumper.$node, 'toggle');
    blueJumper.step();
    expect(blueJumper.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blueJumper, "step");
      expect(blueJumper.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blueJumper.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blueJumper.step.callCount).to.be.equal(2);
    });
  });
});


describe("shyDancer", function() {

  var shyDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shyDancer = new ShyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(shyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that does not use toggle", function() {
    sinon.spy(shyDancer.$node, 'toggle');
    shyDancer.step();
    expect(shyDancer.$node.toggle.called).to.be.false;
  });

  describe("dance", function(){
    it("should not call step at least once per second", function(){
      sinon.spy(shyDancer, "step");
      expect(shyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shyDancer.step.callCount).to.be.equal(0);


    });
  });
});

