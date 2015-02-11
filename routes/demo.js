'use script';

module.exports.routes = function (server) {
  server.route({
    method: 'GET',
    path: '/demo',
    handler: function (request, reply) {
      var Chapter = server.plugins.bookshelf.model('Chapter');

      new Chapter({
        title: 'Title'
      })
      .fetch({ withRelated: 'book' })
      .then(function (chapter) {
        reply(chapter);
      })
      .catch(function (err) {
        reply(err);
      });
    }
  });
};