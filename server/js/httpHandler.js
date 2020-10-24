const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
// Path for the background image ///////////////////////

//set the directory for the background image we will return upon receiving backgroundImage requests
module.exports.backgroundImageFile = path.join('./', 'background.jpg');

////////////////////////////////////////////////////////

let messageQueue = null;
//this function takes in a queue and sets messageQueue to be equal to it
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = () => {

}) => {
  // req.method specifies if the request is GET, POST, etc...
  // req.url is the url string in the request
  //res.writeHead() returns the status code, like 404. Returns content and accept.
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === "GET") {

    if (req.url === "/") { //-> this url is the end-point, the directory within which to look for what we're fetching
    res.writeHead(200, headers);
      res.end(messageQueue.dequeue())
    }
    if (req.url === '///') {
      res.writeHead(200, headers);
      res.end();
    }
    //if req.url is equal to /background.jpg
    if (req.url === '/background.jpg') {
      //fs(directory, callback) to read from the file and convert image to binary
      fs(backgroundImageFile, () => {
        if (err) {
          res.writeHead(404);
          res.end();
        }
        res.writeHead(200, headers);
        res.end(fs.createReadStream(backgroundImageFile));
      });
    }
  }
  if (req.method === "OPTIONS") {
    res.writeHead(200, headers);
    res.end();
  }

};
