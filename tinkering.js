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
