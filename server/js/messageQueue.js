//where does messages live once I am running the server
const messages = []; // the storage unit for messages
//should be thought as a privarty property of the messageQueue class
// the exported functions are methods, like set and get

//the server creates an instance of this class on the RAM

//add command to messages
module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
};

//remove command from messages
module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  return messages.shift();
};