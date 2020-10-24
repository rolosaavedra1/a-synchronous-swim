//this function responds to keyboard key strokes and executes the swimTeam.move() method in response.
$('body').on('keydown', (event) => {
//event has a property key
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

console.log('Client is running in the browser!');
