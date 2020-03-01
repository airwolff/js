//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//  Basic JS
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// % Check if a number is even or odd by checking the
// remainder of the division of the number by 2.
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

let odd = 17 % 2; // = 1 (17 is Odd)
let even = 48 % 2; // = 0 (48 is Even)

// Code	   Output
//  \'	   single quote
//  \"	   double quote
//  \\	   backslash
//  \n	   newline
//  \r	   carriage return
//  \t	   tab
//  \b	   backspace
//  \f	   form feed

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//  Bracket Notation
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// Example
var firstLetterOfFirstName = '';
var firstName = 'Ada';

firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = '';
var lastName = 'Lovelace';

firstLetterOfLastName = lastName[0];

// Value of the last letter of the string
var firstName = 'Charles';
firstName[firstName.length - 1];


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//   Add elements of an existing array to a new array
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
let certsToAdd = ['Algorithms', 'Front End', 'Back End'];
let certification = ['Responsive', ...certsToAdd, 'Api', 'HTTP'];
console.log(certification);
// Log
// ["Responsive", "Algorithms", "Front End", "Back End", "Api", "HTTP"]

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//  Elements of array as arguments to a function
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
const addThreeargs = (x, y, z) => console.log(x + y + z);

let args = [0, 1, 2];
addThreeargs(...args);
//  3

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//  Copy Array
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice
arr2.push(4); // Doesn't push 4 onto 1st array
console.log(arr); // [1,2,3]
console.log(arr2); // [1,2,3,4]

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//  Concatenate
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr3 = [...arr1, ...arr2]; // [0, 1, 2, 3, 4, 5];

//
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = '';
  result +=
    'My ' +
    myAdjective +
    ' ' +
    myNoun +
    ' ' +
    myVerb +
    ' very ' +
    myAdverb +
    '.';
  return result;
}
// Alternative Answer
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result =
    'My ' +
    myAdjective +
    ' ' +
    myNoun +
    ' ' +
    myVerb +
    ' very ' +
    myAdverb +
    '.';
  return result;
}
// Change the words here to test your function
wordBlanks('dog', 'big', 'ran', 'quickly');

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//  Arrays
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//  Nested Arrays
//////////////////////////////////////////////////////////

var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11

// Setup
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

var myData = myArray[2][1]; // 8

var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

//  iterate over array
//////////////////////////////////////////////////////////
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  console.log(total += myArr[i]);
}

//  iterate over nested array
//////////////////////////////////////////////////////////
function multiplyAll(arr) {
  var product = 1;
  for (let i=0; i < arr.length; i++) {
    for (let j=0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

console.log(multiplyAll([[1,2],[3,4],[5,6,7]])); // 5040

//  Array Manipulation
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// .push() onto end of the array. 
// .pop() takes it off the end
// .shift() removes first element
// .unshift() adds to the beginning
// Example
var ourArray = ["Simpson", "J", "cat"];
ourArray.push(["happy", "joy"]); 
// ourArray now equals ["Simpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

myArray.push(['dog', 3]);
// myArray = [["John", 23], ["cat", 2], ["dog", 3]].

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//  Arrays
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// reduce the elements in array to a single value

const numbers = [1, -1, 2, 3]; // currentValue set to each element as it iterates and added to accumulator

// calculating the sum of all the numbers in the array
let sum = 0; // = accumulator

for (let n of numbers)
  sum += n;

// using reduce

// first run through (a) accumulator = 0 per second argument and (c) currentValue = 1 per index 0 of numbers
// a = 0, c = 1 => a = 1;
// a = 1, c = -1 => a = 0;
// a = 0, c = 2 => a = 2;
// a = 2, c = 3 => a = 5;


const sum = numbers.reduce(
  (accumulator, currentValue) => {
  return accumulator + currentValue; //
} // all of this is the first argument, a callback function
 , 0) // 0 = second argument to reduce method which is the initial value for the accumulator, this is optional, removing it will set accumulator to first element in array


// The scope of a variable is its visibility; where in the code is the function available? Here is a list of the different scopes a variable can have.

// Global scope: The variable is available throughout the code
// Local scope: Available in only a certain area (like only within function)
// Block scope: Available within an even more certain area (like an if-statement)
// Your task is to understand how adding var (and not adding) before a variable name, can change the variable’s scope.

// When you add var before the variable name, its scope is determined by where it is placed. Like so:

var num1 = 18; // Global scope
function fun() {
  var num2 = 20; // Local (Function) Scope
  if (true) {
    var num3 = 22; // Block Scope (within an if-statement)
  }
}
// When you don’t, this is the result:

num1 = 18; // Global scope
function fun() {
  num2 = 20; // Global Scope
  if (true) {
    num3 = 22; // Global Scope
  }
}

// local variable takes precedence over the global variable.

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//  Switch
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Without Default statement
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
  case 1:
   answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
  }
  return answer;  
}

caseInSwitch(1);

// With default
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default:
  answer = "stuff"
}
 
  return answer;
}

// If break statement is omitted from a case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
    answer = "Low";
    break;
    case 4:
    case 5:
    case 6:
    answer = "Mid";
    break;
    case 7:
    case 8:
    case 9:
    answer = "High";
    break;
  }

  return answer;  
}

sequentialSizes(1);


// THIS
function isLess(a, b) {
  return a < b
}
// INSTEAD OF 
function isLess(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

isLess(10, 15);


//  When a return statement is reached, the execution of the current function stops and control returns to the calling location.
//////////////////////////////////////////////////////////

var count = 0;

//  Card Counting
//////////////////////////////////////////////////////////
function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++ 1;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -- 1;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  }
  else {
    return count + " Hold";
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//  Objects & Dot Notation
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

//  Update Object
//////////////////////////////////////////////////////////
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

//  Add Property to Object
//////////////////////////////////////////////////////////
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

//  Remove Property to Object
//////////////////////////////////////////////////////////
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;

// Object for Lookups
//////////////////////////////////////////////////////////
function phoneticLookup(val) {
  var result = "";

  var lookup = {
     "alpha": "Adams",
     "bravo": "Boston",
     "charlie": "Chicago",
     "delta": "Denver",
     "echo": "Easy",
     "foxtrot": "Frank"
  };
  result = lookup[val];

  return result;
}
phoneticLookup("charlie");

///////////////////////////

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};


function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  else {
      return "Not Found"
  }
}
checkObj("gift");

// My Try
// function lookUpProfile(name, prop){
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts.hasOwnProperty(prop) == true && contacts[i].firstName == name) {
//       return contacts[i].prop;
//     } else if (contacts[i].firstName != name) {
//       return "No Such Contact";
//     } else if ()
//   }
//   }

for (var x = 0; x < contacts.length; x++){
  if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
      } else {
          return "No such property";
      }
  }
}
return "No such contact";
// Code Explanation:
// The for loop runs, starting at the first object in the contacts list.
// If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, the if statement passes.
// Then, we use .hasOwnProperty() method (checks if there’s a given property and returns a boolean) with prop as an argument. If it’s true, the value of prop is returned.

// If the second if statement fails, No such property is returned.
// If the first if statement fails, the for loop continues on to the next object in the contacts list.
// If the firstName parameter isn’t matched by the final contacts object, the for loop exits and No such contact is returned.


//  Update Multiple Objects
//////////////////////////////////////////////////////////
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// My half-assed solution
// function updateRecords(id, prop, value) {
// if (Object.keys(collection) == id) {
//   if (id.hasOwnProperty(prop) == true) {
//     id.prop = value;
//   } else {
//     return "Doesn't have that"
//   }
// } else {
//   return "Doesn't have that"
// }

if (prop === "tracks" && value !== "") {
  if(collection[id][prop]) {
   collection[id][prop].push(value);
  }
  else {
   collection[id][prop]=[value];
  }
 } else if (value !== "") {
   collection[id][prop] = value;
 } else {
   delete collection[id][prop];
 }

return collection;
//First checks if prop is equal to tracks AND if value isn’t a blank string. If both tests pass, value is pushed into the tracks array.
// If that first check doesn’t pass, it next checks only if value isn’t a blank string. If that test passes, either a new key (prop) and value (value) are added to the object, or an existing key is updated if the prop already exists.
// If both these checks fail (meaning value must be an empty string), then the key (prop) is removed from the object.

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

// After updateRecords(5439, "artist", "ABBA"), artist should be "ABBA"
// After updateRecords(5439, "tracks", "Take a Chance on Me"), tracks should have "Take a Chance on Me" as the last element.
// After updateRecords(2548, "artist", ""), artist should not be set


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// let and const
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// Variable made using const can't be changed (reassigned). Const properties can be changed
const a = 5;
a = 7; // this will not work
const b = {
  a: 1,
  b: 2
};
b = { a: 2, b: 2 }; // this will not work
b.a = 2; // this will work since only a property of b is changed

// Always use const to declare your variables. 
// Use let only when you need to perform any changes (reassignments) to the variable
// completely avoid using var.
//////////////////////////////////////////////////////////

// ES6 template strings `` 
// formatting, such as tabs or new lines, present inside the template strings is directly recorded in the variable.
// And we can declare variables inside the strings using ${}
//////////////////////////////////////////////////////////
let a = `
<div>
   <li> ${myVariable} </li>
</div>
`

.addClass