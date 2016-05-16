// function add (a, b) {
//   return a + b;
// }
//
// console.log( add( 3, 1 ) );
//
// var toAdd = [9, 5];
//
// console.log( add( ...toAdd ) );

// var groupA = ['Mel', 'Izzy'];
// var groupB = ['Alice', 'Bob'];
// var final = [ ...groupB, 3, ...groupA ];
//
// console.log( final );


var person = ['Alice', 25 ];
var personB = ['Bob', 30 ];

function sayHello ( name, age ) {
  console.log( "Hello " + name + ", you are " + age );
}

sayHello( ...person );
sayHello( ...personB );

var names = ['Mike', 'Ben'];
var final = ['Gwyn', ...names ];

final.forEach(
  (name) => { console.log('Hi ' + name)}
);
