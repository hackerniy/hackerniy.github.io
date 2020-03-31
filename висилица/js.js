function start(){
	$('body').empty();
	$('body').append('<div  class="div"></div>')
	$('.div').css('height', '114px')
	$('.div').append('<button onclick="game()">Играть</button>')
}
function getRandomWord(){
	let words = ['электрик', 'секретарь', 'опоптоз', 'герметизация', 'тринитротолуол', 'мужчина', 'тригонометрия', 'восьмидесятичетырёхлетний', 'рентгеноэлектрокардиографический', 'частнопредпринимательский']
	let randomIndex = Math.floor(Math.random() * words.length);
	return words[randomIndex];
}

let word = getRandomWord();
let answer = [];

for (let i = 0; i < word.length; i++) {
	answer.push('-');
}

let ostalos = word.length;
let wrong = [];
let name = 'Толик'

function game(){
	// Объединяем массив в строку
	let str = answer.join(' ')

	$('.div').empty();
	$('.div').append('<h1> ' + str + '</h1>');
	$('.div').append('<input type="text" id="letter" placeholder="Введите букву">')
	$('.div').append('<button onclick="check()">Отправить</button>')
	$('body').append('<canvas id="canv" width="800" height="500"></canvas>')

}
function check(){
	if(ostalos == 0){
		console.log('Molodec`')
	}
	else if(wrong.length == 10){
		$('.div').empty()
		drawend()
	}
	else {
		let letter = $('#letter').val();
		letter = letter.toLowerCase();
		let find = false;

		for (let i = 0; i < word.length; i++) {
			if (letter == word[i]) {
				answer[i] = letter.toUpperCase();
				find = true
			}
		}
		if (find == false){
			wrong.push(letter.toUpperCase())
			drawV(wrong.length)
		}
	
		$('.div').empty();
		$('.div').append('<h1 class="question"> ' + answer.join(' ') + '</h1>');
		$('.div').append('<p class="wrong">' + wrong.join(', ') + '</p>')
		$('.div').append('<input type="text" id="letter" placeholder="Введите букву">')
		$('.div').append('<button onclick="check()">Отправить</button>')
	}
}
function drawV(elem){
	let canv = $('#canv');
	if(elem == 1){
 		canv.drawLine({
 			strokeStyle: 'brown',
 			strokeWidth: 10,
 			x1: 20, y1: 450,
 			x2: 120, y2: 450

 		})
	}
	else if(elem == 2){
		canv.drawLine({
 			strokeStyle: 'brown',
 			strokeWidth: 10,
 			x1: 70, y1: 100,
 			x2: 70, y2: 450
 		})
	}
	else if(elem == 3){
		canv.drawLine({
 			strokeStyle: 'brown',
 			strokeWidth: 10,
 			x1: 70, y1: 100,
 			x2: 280, y2: 100

 		})
	}
	else if(elem == 4){
		canv.drawLine({
 			strokeStyle: 'gray',
 			strokeWidth: 5,
 			x1: 265, y1: 105,
 			x2: 265, y2: 180
 		})
	}
	else if(elem == 5){
		canv.drawArc({
 			strokeStyle: 'black',
 			strokeWidth: 7,
 			x: 265, y: 210,
 			radius: 30
 		})
	}
	else if(elem == 6){
		canv.drawLine({
 			strokeStyle: 'black',
 			strokeWidth: 10,
 			x1: 265, y1: 243,
 			x2: 265, y2: 330
 		})
	}
	else if(elem == 7){
		canv.drawLine({
 			strokeStyle: 'black',
 			strokeWidth: 10,
 			x1: 265, y1: 249,
 			x2: 295, y2: 270
 		})
	}
	else if(elem == 8){
		canv.drawLine({
 			strokeStyle: 'black',
 			strokeWidth: 10,
 			x1: 265, y1: 249,
 			x2: 235, y2: 270

 		})
	}
	else if(elem == 9){
		canv.drawLine({
 			strokeStyle: 'black',
 			strokeWidth: 10,
 			x1: 265, y1: 320,
 			x2: 245, y2: 370
 		})
	}
}
function drawend(){
	let canv = $('#canv')
	canv.drawLine({
 			strokeStyle: 'black',
 			strokeWidth: 10,
 			x1: 265, y1: 320,
 			x2: 285, y2: 370
 		})
	canv.drawLine({
		rounded: 'true',
 		strokeStyle: 'black',
 		strokeWidth: 10,
 		x1: 300, y1: 240,
 		x2: 430, y2: 230,
 		startArrow: true,
 		arrowRadius: 40,
 		arrowAngle: 60
	})
	canv.drawText({
		text: name,
		fillStyle: 'black',
		fontSize: 40,
		x: 400, y: 200
	})
}