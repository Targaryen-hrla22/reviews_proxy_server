const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');

const server = express();
const PORT = 5555;
const corsOptions = {
  origin: "https://amazonaws.com",
  optionsSuccessStatus: 200
}

server.use(cors(corsOptions))
server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../static')));

server.listen(PORT, () => {
  console.log('proxy server is listening on port ', PORT);
});