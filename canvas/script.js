window.onload = function(){
	let can = $('#canvas');
	//прямоугольник
	can.drawRect({
		//обводка
		strokeStyle: 'dodgerblue',
		//заливка
		fillStyle: 'lightblue',
		//ширина обводки
		strokeWidth: 4,
		//перенос ключевой точки из центра в левый верхний угол
		fromCenter: false,
		x:150, y:150,
		width:200, height:200
	});

	//Дуги и окружности
	can.drawArc({
		//обводка
		strokeStyle: 'dodgerblue',
		//заливка
		fillStyle: 'white',
		//ширина обводки
		strokeWidth: 5,
		// радиус
		x: 350, y: 110,
		radius: 100,
		start: 99, end: 380,
	})
	//Линии
	can.drawLine({
		//обводка
		strokeStyle: 'dodgerblue',
		//заливка
		fillStyle: 'white',
		//ширина обводки
		strokeWidth: 15,
		//закругление
		rounded: true,
		x1: 142, y1: 200,
		x2: 431, y2: 65,
		x3: 321, y3: 200,
		//Замкнутый контур
		closed: true,
	})
}