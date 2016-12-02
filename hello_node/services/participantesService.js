const knexfile = require('../knexfile')['development'];
const knex = require('knex')(knexfile);

const service = {};

service.listarParticipantes = function() {
  return knex('participante').select();
};

service.listarEventos = function() {
  return knex('evento').select();
};

service.listarEventosDoParticipante = function(participante_id){
  return knex('compromisso').select()
  .where({participante_id: participante_id})
  .innerJoin('evento', 'evento_id', 'evento.evento_id');
};

service.criarParticipante = function(participante) {
  return knex('participante').insert(participante, 'participante_id');
};

module.exports = service;