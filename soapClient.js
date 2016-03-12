'use strict';

var soap = require('soap');
var url = 'http://localhost:8000/sale?wsdl';
var args = {productId: 1, customerId: 1, cnt: 20, price: 2000, date: '2016-03-15'};
soap.createClient(url, function(err, client) {
	client.sale(args, function(err, result) {
		if(result.success === 1)
			console.log('Sikeres küldés!');
		else
			console.log('Sikertelen küldés!');
	});
});