var Recipe = require("../src/recipe.js");

class Chef {
  constructor(name, recipes) {
    this.name = name;
    this.recipeBox = recipes;
  }

  tryRecipe(attemptedRecipe, newRating) {
    this.recipeBox.forEach((recipe) => {
      if (recipe.name === attemptedRecipe) {
        recipe.attempted = true;
        recipe.rating = newRating;
      }
    });
  }

  addRecipe(name, ingredients) {
    this.recipeBox.push(new Recipe({ name, ingredients }));
  }

  changeRecipe(name, ingredient, amount) {
    this.recipeBox.forEach((recipe) => {
      if (recipe.name === name) {
        recipe.ingredients.forEach((ing) => {
          if (ing.name === ingredient) {
            ing.amount = amount;
          }
        });
      }
    });
  }
}

module.exports = Chef;
