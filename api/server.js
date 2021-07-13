const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

const boxRouter = require('./boxes/boxes-router');

server.use('/api/boxes', boxRouter)


module.exports = server
