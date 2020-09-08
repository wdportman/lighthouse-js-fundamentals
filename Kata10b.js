const talkingCalendar = function (date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let newDateFormat = "";
  let numberSuffix = "";
  let day = "";
  let dateArray = date.split("/");
  if (dateArray[2][0]==="0") {
    day = dateArray[2][1];
  } else {
    day = dateArray[2];
  }
  if ((dateArray[2] === "01") || (dateArray[2] === "21") || (dateArray[2] === "31")) {
    numberSuffix = "st";
  } else if ((dateArray[2] === "02") || (dateArray[2] === "22")) {
    numberSuffix = "nd";
  } else if ((dateArray[2] === "03") || (dateArray[2] ==="23")) {
    numberSuffix = "rd";
  } else {
    numberSuffix = "th";
  }
  newDateFormat = months[dateArray[1] - 1] + " " + day + numberSuffix + ", " + dateArray[0]
  return newDateFormat;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*
Expected output:
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/
