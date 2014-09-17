$(document).ready(function(){
  window.dancers = [];

  $(document).on('click', function() {
    $('audio')[0].play();
  });

  // $(document).on('click', '#stop', function() {
  //   $('audio')[0].pause("death");
  // });

  $("a#stop").on('click', function() {
    $('#song').remove();
    $(this).remove();
  })


  // $('audio').play();
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    console.log(dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // window.that is because it is a globally stored function

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      //later replace function invocake with window.fnName
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);

  });

$('#ball').trigger('click');
$('#ball').remove();
//adds ball to screen on load

  $(document).on('mouseenter', '.shyDancer', function() {
    $(this).css('opacity',.1);
  });

  $(document).on('mouseleave', '.shyDancer', function() {
    $(this).css('opacity',1);
  });

  $(document).on('click', '.dancer', function() {
    $('.dancer').css('background-color', '');
    var closestDancer;
    var closestDistance;

    var clickedDancer = $(this);

    var dancerArray = window.dancers;

    // Iterate through array of dancers
    for(var i = 0; i < dancerArray.length; i++) {

      if((dancerArray[i].css('top') !== clickedDancer.css('top')) || (dancerArray[i].css('left') !== clickedDancer.css('left'))) {

        var distance = Math.sqrt(Math.pow((+dancerArray[i].css('top').slice(0,-2) - +clickedDancer.css('top').slice(0,-2)),2) + Math.pow((+dancerArray[i].css('left').slice(0,-2) - +clickedDancer.css('left').slice(0,-2)),2));
        if(closestDistance === undefined)  {
          closestDistance = distance;
        }

          // Compare all other items to closestDistance
        if(distance < closestDistance) {
          closestDistance = distance;
          closestDancer = dancerArray[i];
        } else {
          console.log('Not Close Enough');
        }

      } else {
          console.log('This is the clicked item.');
      }

    }

    console.log('Loop Is Done');
    console.log('This is the closest dancer:', closestDancer);
    $(closestDancer).css('background-color','yellow');

  });

  $('#lineup').on('click', function(event) {
    console.log(window.dancers);
    // var left = 0;
    // $('.blueJumper').css({left: 0});
    // $('.dancer').css({left: left});
    // console.log(Dancer);
    Dancer.prototype.lineUp();
    $(this).hide();

    // $('.shyDancer').css({left: 0});
    // $('body').css({background: 'black'});

    // move dancers 10 pixels to the right every second
    // setInterval(function() {left +=10; $('.dancer').css('left',left);}, 2000);

  });

  $('#dance').on('click', function(event) {
    // var left = 0;
    // $('.blueJumper').css({left: 0});
    // $('.dancer').css({left: left});
    // console.log(Dancer);
    Dancer.prototype.marchALittle(200, 300);
    $(this).hide();

    // $('.shyDancer').css({left: 0});
    // $('body').css({background: 'black'});

    // move dancers 10 pixels to the right every second
    // setInterval(function() {left +=10; $('.dancer').css('left',left);}, 2000);

  });

});

