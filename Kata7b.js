const camelCase = function(input) {
  output = "";
  for (let i = 0; i <input.length; i++) {
    if ((input[i] !== " ") && (input[i-1] !== " ")) {
      output += input[i].toLowerCase();
    }
    if ((input[i] !== " ") && (input[i-1] === " ")) {
      output += input[i].toUpperCase();
    }
  }
  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/* Expected output:
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/