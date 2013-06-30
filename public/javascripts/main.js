$(function() {
  var calcBalanceAge, lookGyro;
  if (navigator.appVersion.indexOf('iPhone') !== -1) {
    console.log('I am iphone.');
  } else {
    console.log('I am not iphone.');
  }
  calcBalanceAge = function() {
    return $('#count').text('balance age: ' + window.pre_b_age);
  };
  window.x = 0;
  window.y = 0;
  $(window).bind('devicemotion', function(event) {
    window.x = Math.abs(parseFloat(event.originalEvent.accelerationIncludingGravity.x));
    window.y = Math.abs(parseFloat(event.originalEvent.accelerationIncludingGravity.y));
    return window.z = Math.abs(parseFloat(event.originalEvent.accelerationIncludingGravity.y));
  });
  window.b_age = 0;
  lookGyro = function() {
    return window.pre_b_age += window.x + window.y + window.z;
  };
  return $('#count').click(function() {
    var count, timer1;
    count = 5;
    $('#count').text(count);
    lookGyro();
    return timer1 = setInterval(function() {
      $('#count').text(--count);
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