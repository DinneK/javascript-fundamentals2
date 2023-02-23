class Cabinet {
  constructor() {
    this.potions = [];
  }

  isEmpty() {
    if (!this.potions.length) {
      return true;
    }
    return false;
  }

  add(potions) {
    if (potions instanceof Array) {
      this.potions.splice(this.potions.length, 0, ...potions);
    } else {
      this.potions.push(potions);
    }
  }

  takeFirstPotion() {
    return this.potions.shift();
  }

  takePotionWithName(singPot) {
    return this.potions.find((potion, index) => {
      if (potion.name === singPot) {
        this.potions.splice(index, 1);
        return singPot;
      }
    });
  }

  count(potion) {
    return this.potions.reduce((acc, curr) => {
      if (potion === curr.name) {
        acc++;
      }

      return acc;
    }, 0);
  }
}

module.exports = Cabinet;
