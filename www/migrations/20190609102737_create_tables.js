
exports.up = function(knex, Promise) {
  return knex.schema.createTable('visitors', function (table) {
    table.increments();
    table.string('ip');
    table.integer('times');
    table.timestamps();
  }).createTable('songs', function (table) {
    table.increments();
    table.string('title');
    table.string('singer');
    table.string('link');
    table.string('album');
    table.string('genre');
    table.string('notes');
    table.timestamps();
  }).createTable('articles', function (table) {
    table.increments();
    table.string('title');
    table.text('content');
    table.integer('read');
    table.timestamps();
  }).createTable('pictures', function (table) {
    table.increments();
    table.string('link');
    table.text('notes');
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('visitors')
    .dropTable('songs')
    .dropTable('articles')
    .dropTable('pictures');
};
