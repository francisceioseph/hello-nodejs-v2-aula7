
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('evento', table => {
    table.increments('evento_id');
    table.string('nome_evento');
    table.date('data_evento');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('evento');
};
