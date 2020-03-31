
function instructorWithLongestName(instructors) {
  let longest = 0;
  let longestIndex = 0;
  for (let n = 0; n < instructors.length; n++) {
    if((instructors[n].name).length > longest) {
      longest = (instructors[n].name).length;
      longestIndex = n
    }
  }
  return instructors[longestIndex];
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

/*
function instructorWithLongestName(instructors) {
  let longest = instructors[0].length;
  instructors.map(function(n) {
    longest = Math.max(length, n.length)
  });
  instructorName = instructors.filter(function(n) {
    n.length == longest;
  });
  return instructorName;
}
*/


/*
const instructorWithLongestName = function(instructors) {
  let length = 0;
  let longestName = "";

  for (let n = 0; n < instructors[0].length; n++) {
    if(instructors[n].length > length) {
      length = instructors[n].length;
      longestName = instructors[n];
    }
  };
  return longestName;
};
*/
