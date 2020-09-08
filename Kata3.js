const numberOfVowels = function (data) {
  let output = 0;
  let newArray = data.split("");
  for (i = 0; i < newArray.length; i++) {
    if ((newArray[i] === ("a")) || (newArray[i] === ("e")) || (newArray[i] === ("i")) || (newArray[i] === ("o")) || (newArray[i] === ("u"))) {
      output += 1;
    }
  }
  return output;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));