
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('participante', table => {
    table.increments('participante_id');
    table.string('nome_participante');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('participante');
};
