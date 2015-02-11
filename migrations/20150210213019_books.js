'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary().notNull();
    table.string('name', 100).notNull();
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books');
};
