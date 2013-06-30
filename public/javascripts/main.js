$(function() {
  var calcBalanceAge, lookGyro;
  if (navigator.appVersion.indexOf('iPhone') !== -1) {
    console.log('I am iphone.');
  } else {
    console.log('I am not iphone.');
  }
  calcBalanceAge = function() {
    var balance_age;
    balance_age = window.b_age;
    return $('#count').text('balance age: ' + balance_age);
  };
  window.x = 0;
  window.y = 0;
  $(window).bind('devicemotion', function(event) {
    window.x = parseInt(event.originalEvent.accelerationIncludingGravity.x);
    window.y = parseInt(event.originalEvent.accelerationIncludingGravity.y);
    return $('#count').text(window.x);
  });
  lookGyro = function() {
    return window.b_age += window.x + window.y;
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