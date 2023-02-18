class Recipe {
  constructor(recipeInfo) {
    this.name = recipeInfo.name;
    this.ingredients = recipeInfo.ingredients;
    this.attempted = false;
    this.rating = null;
  }

  rateRecipe(newRating) {
    this.attempted = true;
    this.rating = newRating;
  }

  changeIngredientAmount(ingredient, newAmount) {
    this.ingredients.forEach((singleIng) => {
      if (singleIng.name === ingredient) {
        singleIng.amount = newAmount;
      }
    });
  }

  generateGroceryList() {
    return `You need: ${this.ingredients
      .map((ingredient) => `${ingredient.amount} ${ingredient.name}`)
      .join(", ")},`;
  }
}

module.exports = Recipe;
