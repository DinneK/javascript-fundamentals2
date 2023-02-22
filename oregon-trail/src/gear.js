class Gear {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  }

  checkForValidity() {
    let declaration;

    if (this.type !== "food" || "ammunition" || "clothes") {
      statement = `I don't think a ${this.type} will help us.`;
      this.type = null;
      return declaration;
    }
    return `Great, we'll need lots of ${this.type}!`;
  }
}

module.exports = Gear;
