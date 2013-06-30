
$ ->

	if navigator.appVersion.indexOf('iPhone') isnt -1
		console.log 'I am iphone.'
	else
		console.log 'I am not iphone.'


	calcBalanceAge = ->
		balance_age = window.b_age
		$('#count').text('balance age: '+ balance_age)

	window.x = 0
	window.y = 0

	$(window).bind 'devicemotion', (event)->
		window.x = parseInt(event.originalEvent.accelerationIncludingGravity.x)
		window.y = parseInt(event.originalEvent.accelerationIncludingGravity.y)

	lookGyro = ->
		window.b_age += window.x + window.y

	$('#count').click ->
		count = 5;
		$('#count').text(count)
		lookGyro()
		timer1 = setInterval( ->
				$('#count').text(--count)
				lookGyro()
				if count is 0
					clearInterval(timer1)
					calcBalanceAge()
			, 1000);



