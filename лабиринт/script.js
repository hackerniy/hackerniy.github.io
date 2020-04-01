function mapGen(width, height, steps, mazes) {
	// Функция управления персонажем
	function character(dx, dy) {
		// Получаем цвет пикселя из промежутка между
		// той ячейкой, в которой сейчас персонаж, и той, 
		// в сторону которой будем двигаться 
		let pixel = ctx.getImageData(13*x+7+6*dx, 13*y+7+6*dy, 1, 1)
		let r = pixel.data[0];
		let g = pixel.data[1];
		let b = pixel.data[2];
		// Если цвет пикселя чёрный, то никуда не двигаемся
		if (r == 0 && g == 0 && b == 0) {
			dx = 0;
			dy = 0;
			console.log('sdf')
		}
		else {
			$('#step').text(Math.floor(+$('#step').text()+1))
		}

		// Закрашиваем персонажа
		ctx.clearRect(13*x + 3, 13*y + 3, 10, 10)
		// Меняем его координаты
		x += dx;
		y += dy;
		// Отрисовываем персонажа
		ctx.fillRect(13*x + 3, 13*y + 3, 10, 10)
	}

	// Выбираем область рисования
	let canv = document.querySelector('#canv');
	let ctx = canv.getContext('2d');
	// Выписываем количество пройденных шагов и лабиринтов
	$('#step').text(Math.floor(steps));
	$('#complete').text(Math.floor(mazes));
	// Задаём ширину и высоту лабиринта
	canv.width = 13*width + 3;
	canv.height = 13*height + 3;
	// Закрашиваем в чёрный цвет
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, 13*width + 3, 13*height + 3);
	// Генерация лабиринта

	// Объявим массивы для хранения значения множества текущей ячейки, для значения стенки справа и для значения стенки снизу
    a = Array(width); 
    b = Array(width);
    var k = Array(width)
    // Текущее множество
    var q = 1;

    // Цикл по строкам
    for (let str = 0; str < height; str++) {
    	// Проверка принадлежности ячейки множеству
    	for (let i = 0; i < width; i++) {
    		0 == str && (a[i] = 0), ctx.clearRect(13 * i + 3, 13 * str + 3, 10, 10), k[i] = 0, 1 == b[i] && (b[i] = a[i] = 0), 0 == a[i] && (a[i] = q++);
    	}
    	// Добавляем рандомно стенки справа и снизу
    	for (let i = 0; i < width; i++) {
    		k[i] = Math.floor(2 * Math.random()), b[i] = Math.floor(2 * Math.random());

    		if ((0 == k[i] || str == height - 1) && i != width - 1 && a[i + 1] != a[i]) {
                let l = a[i + 1];
                for (let j = 0; j < width; j++) a[j] == l && (a[j] = a[i]);
                ctx.clearRect(13 * i + 3, 13 * str + 3, 15, 10)
            }
            str != height - 1 && 0 == b[i] && ctx.clearRect(13 * i + 3, 13 * str + 3, 10, 15)
    	}
    	// Проверка на замкнутые области.
        for (let i = 0; i < width; i++) {
            var p = l = 0;
            for (let j = 0; j < width; j++) a[i] == a[j] && 0 == b[j] ? p++ : l++;
            0 == p && (b[i] = 0, ctx.clearRect(13 * i + 3, 13 * str + 3, 10, 15))
        }
    }

    // Выход из лабиринта
    ctx.clearRect(13 * width, 3, 15, 10)
	// Обнуляем текущие координаты персонажа
	let x = 0, y = 0;
	// Задаём цвет персонажа
	ctx.fillStyle = 'red';
	// Ставим персонажа в начало
	character(-1, -1);
	// Ожидание нажатия стрелок
	window.onkeydown = function(e) {
		if (e.keyCode == 37) {
			character(-1, 0)
		}
		if (e.keyCode == 38) {
			character(0, -1)
		}
		if (e.keyCode == 39) {
			character(1, 0)
		}
		if (e.keyCode == 40) {
			character(0, 1)
		}
	}
}

window.onload = function() {
	mapGen(20, 20, 0, 0)
}