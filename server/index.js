const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');

const server = express();
const PORT = 5555;
const corsOptions = {
  origin: ["http://ec2-52-91-228-95.compute-1.amazonaws.com", "http://ec2-35-170-196-19.compute-1.amazonaws.com", "http://ec2-54-152-139-251.compute-1.amazonaws.com", "http://amazonaws.com", "http://ec2-54-86-47-69.compute-1.amazonaws.com"], 
  optionsSuccessStatus: 200
}

server.use(cors(corsOptions))
server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../static')));

server.listen(PORT, () => {
  console.log('proxy server is listening on port ', PORT);
});