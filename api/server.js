const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

const boxRouter = require('./boxes/boxes-router');
const transferRouter = require('./transfer/transfer-router');

server.use('/api/boxes', boxRouter)
server.use('/api/transfer', transferRouter)

module.exports = server
