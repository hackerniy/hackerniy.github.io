function getForm(){
	const age = calcAge();

	let finsname = $('#sname').val();
	let finname = $('#name').val();
	let finotch = $('#otchestvo').val();

	$('form').remove();

	$('body').append('<h1> Ваша фамилия: ' + finsname + '</h1>')
	$('body').append('<h1> Ваше имя: ' + finname + '</h1>')
	$('body').append('<h1> Ваше отчество: ' + finotch + '</h1>')
	
}
function calcAge(){
	let str = $('#age').val();
	let a = str.split('-');
	let year = +a[0];
	let month = +a[1];
	let day = +a[2];
	let now = new Date()
	//now.getFullYear() - текущий год
	//now.getMonth() - текущий месяц
	//now.Date() - текущий день

	let age = now.getFullYear() - year;
	if(now.getMonth()+1 < month) age--;
	else if(now.getMonth()+1 == month){
		if(now.getDate() < day) age--;
	}
	if (!age) age = 0;
	return age;
}
function black(){
	$('body').css('backgroundColor','black')
	$('body').css('color','white')
}
function white(){
	$('body').css('backgroundColor','white')
	$('body').css('color','black')
}
window.onload = function(){
	let now = new Date();
	let year = now.getFullYear();
	let month = now.getMonth() + 1;
	let date = now.getDate();

	if (month < 10){
		month = '0' + month;
	}
	if (date < 10){
		date = '0' + date;
	}

	let max = year + '-' + month + '-' + date;
	// console.log(max)
	$('#age').attr('max', max);
}