const ingredientCheck = function(bakery, recipes) {
  let output = [];
  for (let i = 0; i < recipes.length; i++) {
    for (let k = 0; k < bakery.length; k++) {
      if (recipes[i]["ingredients"].includes(bakery[k])) {
        output.push(recipes[i]["name"]);
      }
    }
  }
  return output;
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let arr1 = ingredientCheck(bakeryA,recipes);
  let arr2 = ingredientCheck(bakeryB,recipes);
  for (let j = 0; j < arr1.length; j++) {
    for (let l = 0; l <arr2.length; l++) {
      if (arr1[j] = arr2[l]) {
        return arr1[j];
      }
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// Expected output:
// Persian Cheesecake
// Nima's Famous Dijon Raisins