const sayHello = function(name) {
  console.log("Hello, "+name);
}

var names = ["Caliban","Miranda","Ferdinand"]

for (let i = 0; i<names.length; i++) {
  sayHello(names[i]);
}