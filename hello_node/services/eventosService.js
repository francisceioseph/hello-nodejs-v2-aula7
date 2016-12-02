const knexfile = require('../knexfile')['development'];
const knex = require('knex')(knexfile);

const service = {};

service.criarEvento = function(evento){
  return knex('evento').insert(evento, 'evento_id');
};

module.exports = service;