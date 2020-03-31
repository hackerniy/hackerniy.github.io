window.onload = function() {
	// Функция, которая возвращает случайное число от 0 до size
	function random(size){
		return Math.floor(Math.random()*size);
	}

	//Фуекция, которая вычисляет расстояние от клика до клада
	function gerDistance(event, target){
		let a = event.offsetX - target.x;
		let b = event.offsetY - target.y;
		let c = a*a+b*b;
		let distance = Math.sqrt(c);
		return distance;
	}
	

	function theend(last){
		$('div').empty();
		$('div').append('<h1>'+last+'</h1>');
		$('div').append('<button onclick="location.reload()" >Начать заново</button>')
	}
	function image(distance){

	 	let led = 'map/led.png';
	 	let fire = 'map/fire.png';

	 	return distance > 200 ? led : fire
	}

	let width;
	let height;

	width = $('div').width();
	height = $('div').height()*0.95;

	$('#can').attr({
		width: width,
		height: height
	});
	
	let clicks = 0;

	// Случайная позиция клада
	let target = {
		x: random(width),
		y: random(height)
	}

	$('#can').drawImage({
		source: 'map/map1.jpg',
		x: 0, y:0,
		fromCenter: false,
		width: width, height: height,
	});

	$('#can').click(function(event){
		clicks++;
		//Получаем расстояние до клада
		let distance = gerDistance(event, target);
		//Преобразуем расстояние в подсказку
		//Сделать дома
		let hint = image(distance);

		let size = distance<=200? 11 - Math.floor(distance/20) : 1;

		if(distance < 20){
			theend('Класс, и что дальше?');
		}
		if(clicks == 1000000000000000000000000000){
			theend('Из тебя пирата не сделаешь:(');
		}

		//Выводим подсказку
		$('#can').drawImage({
			source: hint,
			x: event.offsetX, y: event.offsetY,
			width: 20*size, height: 20*size
		});
	});
}
