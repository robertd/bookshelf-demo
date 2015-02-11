'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('chapters', function (table) {
	table.increments('id').primary().notNull();
    table.string('title', 50).notNull();
    table.integer('book_id').notNull().references('id').inTable('books');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('chapters');
};