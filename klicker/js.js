window.onload = function (){
	let clicks = 0;
	
	$('body').append('<p>Ты кликнул ' + clicks + ' раз!</p>');
	$('#bnt').click(function(){
		clicks++;
		$('p').text('Ты кликнул ' + clicks + ' раз!');
	})
}
