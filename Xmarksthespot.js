const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = function(moves) {
  let position = [0,0];
  for (let direction of moves) {
    if (direction === "north") {
      position[1] += 1;
    } else if (direction === "south") {
      position[1] -= 1;
    } else if (direction === "east") {
      position[0] += 1;
    } else if (direction === "west") {
      position[0] -= 1;
    }
  }
  return position;
}

console.log(finalPosition(moves));