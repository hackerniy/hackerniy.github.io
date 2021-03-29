var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.get('/', function(req, res) {
//   res.render('reg');
// });
//
// app.post('/reg', urlencodedParser, function(req, res){
//   console.log(req.body);
//   res.render('reg');
// });

app.post('/', function(req, res) {
  res.render('reg')
})
app.post('/reg', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.render("person", {data: req.body});
});

app.listen(3000);
console.log('Проверка...');
