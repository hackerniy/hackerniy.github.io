window.onload = function(){
	let can = $('#canvas');

	//голова
	can.drawRect({
		fromCenter: false,
		fillStyle: '#D6882A',
		x:170, y:30,
		width:160, height:160
	});
	//волосы
	can.drawRect({
		x:170, y:30,
		width:160, height:40,
		fromCenter: false,
		fillStyle: '#5C2300',
	})
	can.drawRect({
		x:170, y:70,
		width:20, height:10,
		fromCenter: false,
		fillStyle: '#5C2300',
	})
	can.drawRect({
		x:310, y:70,
		width:20, height:10,
		fromCenter: false,
		fillStyle: '#5C2300',
	})
	//глаза
	can.drawRect({
		x:210, y:80,
		width:20, height:20,
		fromCenter: false,
		fillStyle: '#0275A9',
	})
	can.drawRect({
		x:270, y:80,
		width:20, height:20,
		fromCenter: false,
		fillStyle: '#0275A9',
	})
	//рот
	can.drawRect({
		x:210, y:140,
		width:80, height:20,
		fromCenter: false,
		fillStyle: '#703500',
	})
	//тело



	
// 	//прямоугольник
// 	can.drawRect({
// 		//обводка
// 		strokeStyle: 'dodgerblue',
// 		//заливка
// 		fillStyle: 'lightblue',
// 		//ширина обводки
// 		strokeWidth: 4,
// 		//перенос ключевой точки из центра в левый верхний угол
// 		fromCenter: false,
// 		x:150, y:150,
// 		width:200, height:200
// 	});

// 	//Дуги и окружности
// 	can.drawArc({
// 		//обводка
// 		strokeStyle: 'dodgerblue',
// 		//заливка
// 		fillStyle: 'white',
// 		//ширина обводки
// 		strokeWidth: 5,
// 		// радиус
// 		x: 350, y: 110,
// 		radius: 100,
// 		start: 99, end: 380,
// 	})
// 	//Линии
// 	can.drawLine({
// 		//обводка
// 		strokeStyle: 'dodgerblue',
// 		//заливка
// 		fillStyle: 'white',
// 		//ширина обводки
// 		strokeWidth: 15,
// 		//закругление
// 		rounded: true,
// 		x1: 142, y1: 200,
// 		x2: 431, y2: 65,
// 		x3: 321, y3: 200,
// 		//Замкнутый контур
// 		closed: true,
// 	})
}