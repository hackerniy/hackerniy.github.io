var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/style', express.static('style'));

app.get('/', function(req, res) {
  res.render('reg');
});

app.get('/reg', function(req, res) {
  res.render('reg');
});

app.post('/reg', urlencodedParser, function(req, res) {
  console.log(req.body);
  res.render('reg');
});

app.listen(3000);
console.log('Проверка...');
