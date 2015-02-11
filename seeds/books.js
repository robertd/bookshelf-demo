'use strict';

exports.seed = function(knex, Promise) {
  return knex('books').insert({ 'name': 'Book' });
};