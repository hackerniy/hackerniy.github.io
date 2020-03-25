let imgSrc = "";
function readURL(input){
	if(input.files && input.files[0]){
		let reader = new FileReader();

		reader.onload = function(e){
			imgSrc = e.target.result;
		}
		reader.readAsDataURL(input.files[0]);
	}
}

function getForm(){
	const age = calcAge();

	let finsname = $('#sname').val();
	let finname = $('#name').val();
	let finotch = $('#otchestvo').val();
	let email = $('#email').val();
	let phonenum = $('#phonenum').val();
	let color = $('#color').val();
	let gender = $('input[name="pol"]:checked')[0].id;
	if(gender == 'gender1'){
		gender = 'Мужской';
	}
	else if (gender == 'gender2'){
		gender = 'Женский';
	}
	else gender = 'Свой';
	const city = $('#city>option:selected').text();
	

	$('header').remove();

	$('form').remove();
	let main = $('main');
	main.append('<h1> Ваша фамилия: ' + finsname + '</h1>');
	main.append('<h1> Ваше имя: ' + finname + '</h1>');
	if (name.length>0) {
		main.append('<h1> Ваше отчество: ' + finotch + '</h1>');
	}
	main.append('<h1> Ваш email: ' + email + '</h1>');
	main.append('<h1> Ваш телефон: ' + phonenum + '</h1>');
	main.append('<img class="ing" src="'+imgSrc+'"</img>')
	main.append('<h1> Ваш пол: ' + gender + '</h1>')
	
}

function getFilmes(){
	let films = [];
	$('input[type="checkbox"]:checked').each(function(){
		films.push($(this)[0].id);
	});
	return films;
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