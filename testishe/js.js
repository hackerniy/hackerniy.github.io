let name;

function getName(){

    name = $('#name').val();
	if (name == "" || name == null){
		name = "Ярик";
	}

	//Удаляем всё внутри тега body
	$('body').empty();

	hi(name);
}

function hi(name){
	$('body').append("<h1>"+name+", если ты готов начать тестирование, нажми на меня"+"</h1>");
	$('h1').after('<button onclick="test()">Нажми на меня</button>')
}

let quest = ["HTML - язык програмирования?", "Css это не язык программирования?", "Сколько базовых тегов в HTML", "Сколько тегов html в HTML коде может быть?", "У тега input есть закрывающий тег?", "А в теге <b>?", "Запустится ли код, если не закрыть тег <html>?", "Существует ли тег <H1>?", "Может ли id, начинающийся с цифры, выполнять те же функции, что и id, начинающийся с буквы?", "Может ли высота HTML файла быть бесконечной?"]
let answ = ["нет", "да", "4", "2", "нет", "да", "да", "да", "нет", "да"]
let leng = quest.length[]

function test(){
	$('body').empty(); 
	$('body').append('<h1> </h1>');
	$('body').append('<input type="text">');
	$('body').append('<button onclick="check()">Ответить</button>');
	$('h1').text(quest[0])
}

function check() {
	let otv = $('input').val().toLowerCase();

	if (otvet == answ){
		score++;
	}
	quest.shift(); //удаляет первый элемент из массива
	answ.shift();

	if (quest.length != 0){
		$('h2').text(quest[0]);
		$('input').val('');
	}
	else{
		theEnd();
	}	
}

function theEnd(){
	$('body').empty();
	$('body').append('<p class="pf">Итак, '+name+', ты ответил на '+score+' из '+leng+'</p>')
}

function start(){
	//Удаляем элемент с id="start"
	$('#start').remove()
	$('body').append('<div id="div"></div>')
	$('#div').css()
	//Создаем абзац с текстом
	$('#div').append('<p>Введите свое имя...</p>')
	//Создаем поле для ввода
	$('#div').append('<input type="text" id="name">')
	//Создаем кнопку для отправки
	$('#div').append('<input type="submit" id="send">')
	//Задаём атрибуту onclick название функции
	$('#send').attr('onclick', 'getName()');
}	