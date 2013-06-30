
$ ->

	if navigator.appVersion.indexOf('iPhone') isnt -1
		console.log 'I am iphone.'
	else
		console.log 'I am not iphone.'


	calcBalanceAge = ->
		$('#count').text('balance age: '+ window.pre_b_age)

	window.x = 0
	window.y = 0
	window.z = 0

	$(window).bind 'devicemotion', (event)->
		window.x = Math.abs(parseFloat(event.originalEvent.accelerationIncludingGravity.x))
		window.y = Math.abs(parseFloat(event.originalEvent.accelerationIncludingGravity.y))
		window.z = Math.abs(parseFloat(event.originalEvent.accelerationIncludingGravity.z))

	window.b_age = 0
	lookGyro =  ->
		window.pre_b_age += window.x + window.y + window.z

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



