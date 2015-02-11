'use script';

var Hapi = require('hapi');
var server = new Hapi.Server();
var knexfile = require('./knexfile.js');

server.connection({
  host: 'localhost',
  port: 8000
});

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
      models: __dirname + '/models'
    }
  },
], function(err) {
	if (err) {
		throw err;
	}
});

server.start(function() {
	console.log('Served at:' + server.info.uri);
});
