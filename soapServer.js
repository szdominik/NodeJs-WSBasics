'use strict';

var http = require('http');
var soap = require('soap');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'testuser',
  password : '',
  database : 'webtech'
});

var saleService = {
	ws: {
		sale: {
			sale: function(args, cb, headers) {
				args.date = new Date(args.date);
				var result = 1;
				connection.query('INSERT INTO salelog SET ?', args, function(err, rows, fields) {
					if (err)
						result = 0;
				});
				return {
					success: result
				};
			},
		}
	}
};

var xml = require('fs').readFileSync('saleService.wsdl', 'utf8'),
	server = http.createServer(function(request,response) {
		response.end("Working! " + request.url);
	});

server.listen(8000);
soap.listen(server, '/sale', saleService, xml);