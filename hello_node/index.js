const express = require('express');
const bodyParser = require('body-parser');
const knexfile = require('.knexfile')['development'];

const knex = require('kenex')(knexfile);
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/participantes', (req, res) => {

});

app.get('/eventos', (req, res) => {

});

app.get('/participante/:participante_id/eventos', (req, res) => {

});

app.get('/eventos/:evento_id/participantes', (req, res) => {

});

app.post('/eventos/new', (req, res) => {

});

app.post('/participantes/new', (req, res) => {

});

app.post('compromissos/new', (req, res) => {

});

app.listen(8080);