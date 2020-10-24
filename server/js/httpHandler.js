const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const queue = require('./messageQueue.js');
// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
//this function takes in a queue and sets messageQueue to be equal to it
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = () => {
  //print something out to let user know that router was invoked?
  //maybe print req and res?
}) => {
  // req.method specifies if the request is GET, POST, etc...
  // req.url is the url string in the request
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  //res.writeHead() returns the status code, like 404. Returns content and accept.
  res.writeHead(200, headers);
  //Anything you want to do, do here


  res.end(queue.dequeue())




  //tells the server that the response is over.
  //res.end('left');

  //next is the CB
  next(); // invoke next() at the end of a request to help with testing!
};
