/*
// weather example

const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


// temperature example

const temperature = 12;

if (temperature < 0) {
  console.log("Make sure your pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
console.log ("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!);


// citizen example

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea.");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}

/*
// Code for which school example

const whichSchool = function (age) {
  if (age < 13) {
    whichSchool = "Elementary School";
    return "I am younger than 13 years old. I go to Elementary School";
} else if (age > 13 && age <= 18) {
    whichSchool = "Secondary School";
    return "I am between the ages of 13 and 18. I go to Secondary School";
} else {
    whichSchool = "Lighthouse Labs";
    return "I am over the age of 18. I choose to go to Lighthouse Labs!";
}

console.log(whichSchool(8));
*/


const whichSchool = function (age) {
  if (age < 13) {
    return "Elementary School";
} else if (age >= 13 && age <= 18) {
    return "Secondary School";
} else {
    return "Lighthouse Labs";
}

}
console.log(whichSchool(13));

