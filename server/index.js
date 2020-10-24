


const keypressHandler = require('./js/keypressHandler');
//everything that comes into the server has to come through this module first

const queue = require('./js/messageQueue.js')
keypressHandler.initialize(message => queue.enqueue(message));
const httpHandler = require('./js/httpHandler');
httpHandler.initialize(queue);

//instanstiates http object
const http = require('http');
//instanstiates a http.server object with the router function as an argument
const server = http.createServer(httpHandler.router);

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);
