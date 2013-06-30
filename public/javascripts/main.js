$(function() {
  var calcBalanceAge, lookGyro;
  if (navigator.appVersion.indexOf('iPhone') !== -1) {
    console.log('I am iphone.');
  } else {
    console.log('I am not iphone.');
  }
  calcBalanceAge = function() {
    return $('#count').text('balance age: ' + window.b_age);
  };
  window.x = 0;
  window.y = 0;
  $(window).bind('devicemotion', function(event) {
    window.x = parseFloat(event.originalEvent.accelerationIncludingGravity.x);
    return window.y = parseFloat(event.originalEvent.accelerationIncludingGravity.y);
  });
  window.b_age = 0;
  lookGyro = function() {
    window.b_age += window.x + window.y;
    return $('#count').text(window.b_age);
  };
  return $('#count').click(function() {
    var count, timer1;
    count = 5;
    $('#count').text(count);
    lookGyro();
    return timer1 = setInterval(function() {
      lookGyro();
      if (count === 0) {
        clearInterval(timer1);
        return calcBalanceAge();
      }
    }, 1000);
  });
});

/*
//@ sourceMappingURL=main.js.map
*/