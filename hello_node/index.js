const express = require('express');
const bodyParser = require('body-parser');
const knexfile = require('./knexfile')['development'];

const participantesService = require('./services/participantesService');
const eventosService = require('./services/eventosService');


const knex = require('knex')(knexfile);
const app = express();

app.use(express.static('www'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/participantes', (req, res) => {
  participantesService.listarParticipantes()
  .then(participantes => {
    res.send(participantes);
  })
  .catch(error => {
    res.send(error);
  })
});

app.get('/eventos', (req, res) => {
  eventosService.listarEventos()
  .then(eventos => {
    res.send(eventos);
  })
  .catch(error => {
    res.send(error);
  });
});

app.get('/participantes/:participante_id/eventos', (req, res) => {
  let participante_id = req.params.participante_id;

  participantesService.listarEventosDoParticipante(participante_id)
  .then(eventos => {
    res.send(eventos);
  })
  .catch(error => {
    res.send(error);
  });
});

app.get('/eventos/:evento_id/participantes', (req, res) => {
  let evento_id = req.params.evento_id;

  eventosService.listarParticipantesDoEvento()
  .then(participantes => {
    res.send(participantes);
  })
  .catch(error => {
    res.send(error);
  });
});

app.post('/eventos/new', (req, res) => {
  let novoEvento = req.body;

  eventosService.criarEvento(novoEvento)
  .then(record => {
    res.send(`Evento criado com sucessso. id: ${record[0]}`);
  })
  .catch(error => {
    res.send(error);
  });
});

app.post('/participantes/new', (req, res) => {
  let novoParticipante = req.body;

  participantesService.criarParticipante(novoParticipante)
  .then(record => {
    res.send(`Participante criado com sucessso. id: ${record[0]}`);
  })
  .catch(error => {
    res.send(error);
  });
});

app.post('/compromisso/new', (req, res) => {

});

app.listen(8080);