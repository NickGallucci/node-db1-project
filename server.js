const express = require('express');

const db = require('./data/dbConfig');

const accountsRouter = require('./accounts/accountsRouter')

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter) //connects the router to the server

server.get('/', (req, res) => {
    return res.send('<h1> Que dialup tone! <h2>')
});

server.use((req, res) => {
    return res.status(500).json({ errorMessage: 'Uh oh, an error has occured!'})
});

module.exports = server;