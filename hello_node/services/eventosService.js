const knexfile = require('../knexfile')['development'];
const knex = require('knex')(knexfile);

const service = {};

service.criarEvento = function(evento){
  return knex('evento').insert(evento, 'evento_id');
};

service.listarEventos = function(){
  return knex('evento').select();
};

service.listarParticipantesDoEvento = function(evento_id) {
  return knex('compromisso')
  .select()
  .where({evento_id: evento_id})
  .innerJoin('participante', 'compromisso.participante_id', 'participante.participante_id');
};

module.exports = service;