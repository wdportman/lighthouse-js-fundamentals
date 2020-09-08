const lastIndexOf = function(array, element) {
  let match = false;
  let result = 0;
  for (let i = (array.length - 1); i >= 0; i--) {
    if (array[i] === element) {
      result = i;
      match = true;
      break;
    }
  }
  if (match) {
    return result;
  } else {
    return -1;
  }
};