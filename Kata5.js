const urlEncode = function(text) {
  let output = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      output += text[i];
    } else if (text[i]===" ") {
      output += "%20";
    }
  }
  return output;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));