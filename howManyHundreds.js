const howManyHundreds = function(num) {
  if (num >=100) {
    return Math.trunc(num/100)
  } else {
    return 0
  }
}

console.log(howManyHundreds(900));