'use strict';

exports.seed = function(knex, Promise) {
  return knex('chapters').insert({
  	'title': 'Title',
  	'book_id': 1
  });
};