var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

// Create the Window
var window = new UI.Window();

// Create a background Rect
var bgRect = new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(134, 80),
  backgroundColor: 'black'
});

// Add Rect to Window
window.add(bgRect);

// Create Left Text
var leftText = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 30),
  text: "Left",
  font: 'gothic-18-bold',
  color: 'white',
  textAlign: 'right'
});

// Create select Text
var selectText = new UI.Text({
  position: new Vector2(0, 55),
  size: new Vector2(144, 30),
  text: "Select/Fire",
  font: 'gothic-18-bold',
  color: 'white',
  textAlign: 'right'
});

// Create select Text
var rightText = new UI.Text({
  position: new Vector2(0, 110),
  size: new Vector2(144, 30),
  text: "Right",
  font: 'gothic-18-bold',
  color: 'white',
  textAlign: 'right'
});

// Add the TimeText
window.add(leftText);
window.add(selectText);
window.add(rightText);

window.on('click', function(e) {
  
  var key;
  
  if(e.button == 'up') {
      key = 'L';
  } else if(e.button == 'down' ) {
      key = 'R';
  } else {
    key = 'C';
  }
  
  var URL = 'http://192.168.1.234/' + key;
  
  ajax(
  {
    url: URL
  },
  function(data, status, request) {
    console.log('Sent key');
  },
  function(error, status, request) {
    console.log('The ajax request failed: ' + error);
  });
    
});

// Show the Window
window.show();
