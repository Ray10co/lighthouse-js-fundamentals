function multiply (a,b) {
return a*b;
};

const result = multiply(2,4);
console.log(result);

var celsius = 12;
var fahrenheit = celsius * 1.8 + 32;
console.log (fahrenheit);
 


var quote = "stay awhile and listen!";
console.log(quote[6]);

var joke = "What's the best thing about Switzerland?\nI don't know, but it's flag is a big plus!"
console.log(joke);

var weather = "sunny";
if (weather === "Snow") {
  console.log("bring a coat."); 
} else if (weather === "rain") {
  console.log("bring a rain jacket");
} else {
  console.log("wear what you have on");
};

var musicians = 1;
if (musicians < 1) {
    console.log("not a group");
}else if (musicians == 1) {
    console.log("solo");
}else if (musicians == 2) {
    console.log("duet");
}else if (musicians == 3) {
    console.log("trio");
} else if (musicians == 4) {
    console.log("quartet");
} else {
    console.log("this is a large group");
}



var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = true;

if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife";
    solved = true;
    
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;
    
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved = true
    
} else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison"
    solved = true
    
} else { 
    console.log("this is unsolveable.")
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}


for(let counter = 3; counter >= 0; counter --) {
console.log(counter);
};


var balance = 350;
var checkBalance = true;
var isActive = true;

// check your balance exercise

if(checkBalance === true && isActive === true && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if (checkBalance === true && isActive === false) {
    console.log("Your account is no longer active.");
} else if (checkBalance === true && isActive === true && balance === 0) {
    console.log("Your account is empty.");
} else if (checkBalance === true && isActive === true && balance < 0) {
    console.log ("Your balance is negative. Please contact bank.");
} else {
    checkBalance === false;
    console.log("Thank you. Have a nice day!");
}


// exercises in UDACITY

var x = 10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
}

/*
// Looping over arrays

const amounts = [61.00, 52.25, 112.99, 5.00];

let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);

*/



// for...of loop over array


const amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;
for(let amount of amounts) {
total += amount;
}
console.log("order total is: ", total);


// for x-marks the spot exercise

let moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

function finalPosition(moves) {
  let parade = [0,0];
  for (let amount of moves) {
    switch (amount) {
      case 'north':
        parade[1] += 1;
        break;
      case 'west':
        parade[0] -= 1;
        break;
      case 'east' :
        parade[0] += 1;
        break;
      case 'south' :
        parade[1] -= 1;
        break;
  
    }
  }
  return parade;
}
console.log(finalPosition(moves));

// function exercises

function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}

var avg = findAverage(5, 9);

console.log(avg);


// return & logging

function sleep() {
  console.log("I'm sleepy!");
  return "zzz";
  return "snore";
}

sleep();


// scope librarian example

let James = "I'm looking for this book...";
function library(firstArgument){
  let librarian = "oh, you'll want to look in the classic literature section, follow me!";
  function classicLiterature(argument){
    let book ="great experiences";
    console.log(book + ' ' + firstArgument + ' ' + argument);
  }
  classicLiterature(James);
}


// build a line

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

console.log(makeLine(10));

function buildTriangle(x) {
  let triangle = "";
  for (let t = 1; t <= x; t++) {
    triangle += makeLine(t)
  }
  return triangle;
}
console.log(buildTriangle(10));


// age calculator

function ageCalculator (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old."
}
console.log(ageCalculator("Ray", 1993, 2020));

// how many hundreds 

function howManyHundreds(num) {
  let total = parseInt(num/100);
  return total
}
console.log(howManyHundreds(560));

// 
