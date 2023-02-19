class VendingMachine {
  constructor(machineInfo) {
    this.id = machineInfo.id;
    this.isBroken = machineInfo.isBroken;
    this.snacks = [];
  }

  addSnacks(snack) {
    if (this.snacks.length === 0) {
      this.snacks.push(snack);
    }
    this.snacks.forEach((item) => {
      if (!item.name.includes(snack.name)) {
        this.snacks.push(snack);
      }
    });
    return `Sorry, that snack is already stocked! Try adding a different snack.`;
  }

  purchaseSnack(item, pay) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (pay < this.snacks[i].price) {
        return `Sorry, not enough payment. Please add more money.`;
      }
      if (this.snacks[i].name === item && this.snacks[i].itemsInStock > 0) {
        this.snacks[i].itemsInStock--;
        const change = pay - this.snacks[i].price;
        return `Success! Here is $${change} back!`;
      }
    }
    return `Sorry, no items in stock. Try another item.`;
  }
}

module.exports = VendingMachine;
