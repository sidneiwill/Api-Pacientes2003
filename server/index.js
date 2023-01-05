const express = require('express');
const jsonServer = require('json-server');
const server = express();
const cors = require('cors');
const serverPort = 3001;


// Fix cross-origin issues
server.use(cors());
server.use('/api', jsonServer.router('./rippedData/Pacientes.json'));
server.listen(serverPort, () => console.log(`Server is running on port ${serverPort}`));