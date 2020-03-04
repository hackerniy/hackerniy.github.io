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
	
	// function checkwin(){

	// 	return 
	// }

	let width;
	let height;

	width = $('#can').width();
	height = $('#can').height();
	
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
		let hint = 'Подсказка' + distance;
		let win = false;

		//Выводим подсказку
		$('#can').drawText({
			x: 50, y: 50,
			fromCenter: false,
			fillStyle: '#36e',
			fontStyle: 'bolt',
			fontSize: '20pt',
			text: hint,
			// layer: true, name: 'text'
		})
	});
}
