const range = function(start, end, step) {
  let newArray = [];
  if ((start !== undefined) && (end !== undefined) && (step !== undefined) && (start <= end) && (step > 0)) {
    for (let i = start; i <= end; i += step) {
      newArray.push(i);
    }
  } else {
    newArray = []; 
  }
return newArray;
}