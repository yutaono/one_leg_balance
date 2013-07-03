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
  window.z = 0;
  $(window).bind('devicemotion', function(event) {
    window.x = parseFloat(event.originalEvent.acceleration.x);
    window.y = parseFloat(event.originalEvent.acceleration.y);
    return window.z = parseFloat(event.originalEvent.acceleration.z);
  });
  window.pre_b_age = 0;
  lookGyro = function() {
    return window.pre_b_age += Math.sqrt(window.x * window.x + window.y * window.y + window.z * window.z);
  };
  return $('#count').click(function() {
    var count, timer1;
    count = 5;
    $('#count').text(count);
    lookGyro();
    return timer1 = setInterval(function() {
      count = count - 0.1;
      if (count <= 0) {
        calcBalanceAge();
        return clearInterval(timer1);
      } else {
        $('#count').text(Math.ceil(count));
        return lookGyro();
      }
    }, 100);
  });
});

/*
//@ sourceMappingURL=main.js.map
*/