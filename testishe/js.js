function getName(){
    let a = prompt("Какое твое имя? ");
	if (a == "" || a == null){
		a = "Школяр";
	}

	alert( a + ", ты проходишь самый увлекательный тест");
	return a
}

function test(){
	const name = getName();

	const quest = ["Ты кто?", "Это точно ты?"]
	const answ = ["Петя", "да"]

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