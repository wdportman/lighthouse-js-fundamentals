// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return (4/3)*PI*Math.pow(radius,3);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return PI*Math.pow(radius,2)*(height/3);
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height*width*depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let output = 0;
  for (let i = 0; i <solids.length; i++) {
    if (solids[i]===largeSphere) {
      output += sphereVolume(40);
    } else if (solids[i] === smallSphere) {
      output += sphereVolume(10);
    } else if (solids[i] === cone) {
      output += coneVolume(3, 5);
    }
  }
  return output;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

/*
Expected Output
true
true
true
true
*/