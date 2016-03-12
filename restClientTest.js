'use strict';

var request = require('supertest');
var app = require('./restServer.js');

describe('WebServers', function() {

	describe('GET /products', function() {
		it('should return an array with specified datas', function(done) {
			request(app)
				.get('/products')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200, {
					products: [{ id: 1, name: 'alma', description: 'gyümölcs', cnt: 500, price: 100}]
				}, done);
		});
	});
	
});