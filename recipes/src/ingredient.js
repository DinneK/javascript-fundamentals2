class Ingredient {
  constructor(ingredientInfo) {
    this.name = ingredientInfo.name;
    this.amount = ingredientInfo.amount;
  }

  changeAmount(newAmount) {
    this.amount = newAmount;
  }
}

module.exports = Ingredient;
