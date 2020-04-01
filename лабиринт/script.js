function start() {
	$('body').append('<h1>"Минималистичный лабиринт"</h1>');
	$('body').append('<h3>Выбор сложности: </h3>');
	$('body').append('<button onclick="easy()">Легко</button>');
	$('body').append('<button onclick="medium()">Средне</button>');
	$('body').append('<button onclick="hard()">Сложно</button>');
}
function getwh(){
	if (easy()){
		canv.width = 5 * width + 1;
		canv.height = 5 * height + 1;
	}
	if (medium()){
		canv.width = 10 * width + 2;
		canv.height = 10 * height + 2;
	}
	if (hard()){
		canv.width = 15 * width + 5;
		canv.height = 15 * height + 5;
	}
}
function mapGen(width, height, steps, mazes){
	$('body').empty();
	// Функция управления персонажем
	function character(dx, dy){
		// Получаем цвет пикселя из промежутка
		// той ячейкой, в которой сейчас персонаж,
		// и той, в сторону которой будем двигаться
		let pixel = ctx.getImageData(15*x+8+7*dx, 15*y+8+7*dy, 1, 1)
		let r = pixel.data[0]
		let g = pixel.data[1]
		let b = pixel.data[2]
		// Если цвет пикселя черный, то никуда не двигаемся
		if (r == 0 && g == 0 && b == 0){
			dx = 0;
			dy = 0;
		}
		else{
			$('#step').text(Math.floor(+$('#step').text()+1))
		}

		// Закрашиваем персонажа
		ctx.clearRect(15 * x + 5, 15 * y + 5, 10, 10)
		// Меняем координаты
		x += dx;
		y += dy;
		// Отрисовываем персонажа
		ctx.fillRect(15 * x + 5, 15 * y + 5, 10, 10)
	}

	// Выбираем область рисования
	let canv = document.querySelector('#canv');
	let ctx = canv.getContext('2d');

	// Колличество пройденых шагов и лабиринтов
	$('#step').text(Math.floor(steps));
	$('#complete').text(Math.floor(mazes));

	// Задаем ширину и высоту лабиринта
	canv.width = 15 * width + 5;
	canv.height = 15 * height + 5;

	// Закрашиваем в черный цвет
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, 15 * width + 5, 15 * height + 5);

	// Генерация лабиринта

	// Обнуляем текущие координаты персонажа
	let x = 0, y = 0

	// Задаем цвет персонажа
	ctx.fillStyle = 'yellow';

	// Ставим персонажа в начало
	character(-1, -1);

	// Ожидание нажатия стрелок
	window.onkeydown = function(e){
		if(e.keyCode == 37){
			character(-1, 0)
		}
		if(e.keyCode == 38){
			character(0, -1)
		}
		if(e.keyCode == 39){
			character(1, 0)
		}
		if(e.keyCode == 40){
			character(0, 1)
		}
	}

}

window.onload = function(){
	mapGen(30, 30, 0, 0)
}