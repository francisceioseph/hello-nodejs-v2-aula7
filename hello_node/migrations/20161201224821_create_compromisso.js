
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('compromisso', table => {
    table.integer('evento_id').unsigned();
    table.foreign('evento_id').references('evento.evento_id');

    table.integer('participante_id').unsigned();
    table.foreign('participante_id').references('evento.participante_id');

    table.primary(['evento_id', 'participante_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('compromisso');
};
