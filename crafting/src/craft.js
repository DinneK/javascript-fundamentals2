// var Material = require("./material");

class Craft {
  constructor(craftingInfo) {
    this.name = craftingInfo.type;
    this.materials = craftingInfo.materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;
    return `All done! It looks great!`;
  }

  calculateProjectTotal() {
    return this.materials
      .map((material) => material.price * material.amount)
      .reduce((acc, curr) => {
        acc = acc + curr;
        return acc;
      });
  }
}

module.exports = Craft;
