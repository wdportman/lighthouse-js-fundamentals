const calculateChange = function(total, cash) {
  let changeNeeded = cash - total;
  let changeCombinationGiven = {};
  let changeOptions = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  }
  for (let i = 0; i < changeOptions.length; i++) {
    if (changeOptions[i] < changeNeeded) {
      changeCombinationGiven += changeOptions[i].value;
    }
  }
  return changeCombinationGiven;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/*
Expected Output
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/