'use strict';

module.exports = function (bookshelf) {
    return bookshelf.extend({
      tableName: 'chapters',
      book: function () {
        return this.belongsTo('Book');
      }
    });
};