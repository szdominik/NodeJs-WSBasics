'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser.json());

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'testuser',
  password : '',
  database : 'webtech'
});

app.get('/', function(req, res) {
	res.status(200).send('We are ready!');
});

app.get('/products', function(req, res) {
	connection.query('SELECT * FROM products WHERE cnt > 0', function(err, rows, fields) {
		if (err)
			res.status(404).send({ error: "404!" });
		else
			res.status(200).send({ products: rows });
	});
});

app.listen(process.env.PORT || 3000, function () {
	console.log('The webservice is listening on port', this.address().port);
});

module.exports = app;