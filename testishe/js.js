function getName(){

    let a = prompt("Какое твое имя? ");
	if (a == "" || a == null){
		a = "Ярик";
	}

	alert( a + ", ты проходишь самый увлекательный тест");
	//Удаляем всё внутри тега body
	$('body').empty();
	return name
}

function test(){
	const name = getName();

	const quest = ["HTML - язык програмирования?", "Css это не язык программирования?", "Сколько базовых тегов в HTML", "Сколько тегов html в HTML коде может быть?", "У тега input есть закрывающий тег?", "А в теге <b>?", "Запустится ли код, если не закрыть тег <html>?", "Существует ли тег <H1>?", "Может ли id, начинающийся с цифры, выполнять те же функции, что и id, начинающийся с буквы?", "Может ли высота HTML файла быть бесконечной?"]
	const answ = ["нет", "да", "4", "2", "нет", "да", "да", "да", "нет", "да"]

	let score = 0;
	for( let i = 0; i < quest.length; i++ ){
		let q = quest[i];
		let a = answ[i];
		let otvet = prompt("Вопрос № " + (i+1) + ": \n" + q );
		if (otvet == a){
			score = score + 1
		}
	}
	alert(name + ", ты набрал " + score + " / " + answ.length + " правильных вопросов")
}
function start(){
	//Удаляем элемент с id="start"
	$('#start').remove()
	//Создаем абзац с текстом
	$('body').append('<p>Введите свое имя...</p>')
	//Создаем поле для ввода
	$('body').append('<input type="text" id="name">')
	//Создаем кнопку для отправки
	$('body').append('<input type="submit" id="send">')
	//Задаём атрибуту onclick название функции
	$('#send').attr('onclick', 'getName()');
	
}	