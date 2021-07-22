const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

const boxRouter = require("./boxes/boxes-router");
const transferRouter = require("./transfer/transfer-router");
const objectRouter = require("./objects/objects-router");
const barcodeRouter = require("./barcodes/barcodes-router");

server.use("/api/boxes", boxRouter);
server.use("/api/transfer", transferRouter);
server.use(["/api/objects", "/api/object"], objectRouter);
server.use(["/api/barcode", "/api/barcodes"], barcodeRouter);

module.exports = server;
