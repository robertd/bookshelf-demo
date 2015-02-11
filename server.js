'use script';

var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000
});
var knexfile = require('./knexfile.js');

var knex = require('knex')(knexfile['development']);
var bookshelf = require('bookshelf')(knex);


server.register([
  {
  	register: require('hapi-route-auto-reg'),
  	options: {
  		directory: __dirname + '/routes'
  	}
  },
  {
    register: require('hapi-bookshelf-models'),
    options: {
      knex: knexfile['development'],
      plugins: ['registry'],
      models: __dirname + '/models/withPlugin'
    }
  },
], function(err) {
	if(err) {
		throw err;
	}
});

server.start(function() {
	console.log('Served at:' + server.info.uri);
});
