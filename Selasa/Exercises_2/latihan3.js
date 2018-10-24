/**
 * CODECADEMY
 * JAVASCRIPT
 * 3. Introduction Control Flow
 */

//  1. lesson 1 if/else statement
var harryPotterFan = false;
if (harryPotterFan) {
    console.log('Mischief managed');
} else {
    console.log('I lead a muggle \'s life');
}
console.log('----------------------');
// 2. lessong 2
var hungerLevel = 7;

if (hungerLevel >= 7) {
  console.log('Time to eat!');
} else {
  console.log('Let\'s eat later');
}
console.log('----------------------');

// 3. lesson 3
var moonPhase = 'full';
var moonPhaseA = 'full';
var foggyNight = false;

if (moonPhaseA === 'full') {
    console.log("Howwwwlll!!");
}
else {
    console.log('I swear I\'am swear not a werewolf');
}
console.log('----------------------');


if (moonPhase === 'full' && foggyNight) {
  console.log('Howwlll!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') { 
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}
console.log('----------------------');

switch (moonPhase) {
 case 'full':
    console.log('Howwwwlll!!');
    break;
 case 'mostly full':
    console.log('Arms and legs are getting harrier');
    break;
 case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
}
console.log('----------------------');

// 4. else if statements
// contoh
var stopLight = 'green';
if (stopLight === 'red') {
    console.log('Stop');
} else if (stopLight === 'yellow') {
    console.log('Slow down');
} else if (stopLight === 'green') {
    console.log('GO!');
} else {
    console.log('Caution, unknown!');
}
console.log('----------------------');

// 4. latihan


var stopLightA = 'green';
var pedestrians = true;
// 5. lesson 5  logical Operators
if (stopLightA === 'green' && pedestrians === false) {
    console.log('Go!');
} else {
    console.log('Stop');
}
console.log('----------------------');

if (moonPhase === 'full' || foggyNight) {
    console.log('Howwlll!');
  } else if (moonPhase === 'mostly full') {
    console.log('Arms and legs are getting hairier');
  } else if (moonPhase === 'mostly new') { 
    console.log('Back on two feet');
  } else {
    console.log('Invalid moon phase');
  }
  
console.log('----------------------');

// 7. lesson 7 Switch Case
var groceryItem = 'papaya';
switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.29');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
}
console.log('----------------------');
