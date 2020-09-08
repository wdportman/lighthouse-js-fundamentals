const instructorWithLongestName = function(instructors) {
  let output = {name: "", course: ""};
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > output.name.length) {
      output.name = instructors[i].name;
      output.course = instructors[i].course;
    }
  }
  return output;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));